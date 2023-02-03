import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { useTaskDispatchers } from "App/entities/Task/state/hooks/useTaskDispatchers";
import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { useDraggedItemDispatchers } from "App/state/shared/DraggedItem/hooks/useDraggedItemDispatchers";

export const useTaskFeatures = (task: TaskViewModel) => {
  const { dispatchRemoveTask, dispatchMoveTask } = useTaskDispatchers();
  const { dispatchSetDraggedItem } = useDraggedItemDispatchers();

  const removeTask = () => dispatchRemoveTask(task);

  const dropOnTask = (draggedItem: AppDraggedItem) => {
    if (draggedItem.type !== DraggedItemType.Task) {
      return;
    }

    const draggedTask: TaskViewModel = draggedItem.data;

    dispatchMoveTask(draggedTask, task);

    if (draggedTask.listId === task.listId) {
      return;
    }

    dispatchSetDraggedItem({
      ...draggedItem,
      data: {
        ...draggedTask,
        listId: task.listId,
      },
    });
  };

  return { removeTask, dropOnTask };
};
