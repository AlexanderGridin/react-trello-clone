import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { TaskModel } from "App/entities/Task/TaskModel";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { useDraggedItemDispatchers } from "App/state/shared/DraggedItem/hooks/useDraggedItemDispatchers";
import { useTaskDispatchers } from "../state/hooks/useTaskDispatchers";

export const useTaskFeatures = (task: TaskModel) => {
  const { dispatchRemoveTask, dispatchMoveTask } = useTaskDispatchers();
  const { dispatchSetDraggedItem } = useDraggedItemDispatchers();

  const removeTask = () => dispatchRemoveTask(task);

  const dropOnTask = (draggedItem: AppDraggedItem) => {
    if (draggedItem.type !== DraggedItemType.Task) {
      return;
    }

    const draggedTask: TaskModel = draggedItem.data;

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
