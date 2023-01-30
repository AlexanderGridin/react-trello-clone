import { DraggedItemType } from "App/enums/DraggedItemType";
import { AppDraggedItem } from "App/models/AppDraggedItem";
import { useDraggedItemDispatchers } from "App/state/shared/DraggedItem/hooks/useDraggedItemDispatchers";
import { TaskModel } from "../models/TaskModel";
import { useTaskDispatchers } from "../state/hooks/useTaskDispatchers";

export const useTaskActions = (task: TaskModel) => {
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
