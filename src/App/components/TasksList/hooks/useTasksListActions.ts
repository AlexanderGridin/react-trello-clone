import { TasksListModel } from "../models/TasksListModel";
import { useTasksListDispatchers } from "../state/hooks/useTasksListDispatchers";
import { AppDraggedItem } from "App/models/AppDraggedItem";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { useTaskDispatchers } from "App/components/Task/state/hooks/useTaskDispatchers";
import { useDraggedItemDispatchers } from "App/state/shared/DraggedItem/hooks/useDraggedItemDispatchers";
import { TaskModel } from "App/components/Task/models/TaskModel";

export const useTasksListActions = (list: TasksListModel) => {
  const {
    dispatchRemoveTasksList,
    dispatchMoveTasksList,
    dispatchPushTaskInTasksList,
  } = useTasksListDispatchers();

  const { dispatchAddTask, dispatchRemoveTask } = useTaskDispatchers();

  const { dispatchSetDraggedItem } = useDraggedItemDispatchers();

  const remove = () => dispatchRemoveTasksList(list);

  const addTask = (content: string) =>
    dispatchAddTask(new TaskModel({ listId: list.id, content }));

  const dropOnList = (draggedItem: AppDraggedItem) => {
    if (draggedItem.type === DraggedItemType.TasksList) {
      dispatchMoveTasksList(draggedItem.data, list);
      return;
    }

    if (draggedItem.type !== DraggedItemType.Task || list.tasks.length) {
      return;
    }

    dispatchRemoveTask(draggedItem.data);
    dispatchPushTaskInTasksList(list, draggedItem.data);
    dispatchSetDraggedItem({
      ...draggedItem,
      data: {
        ...draggedItem.data,
        listId: list.id,
      },
    });
  };

  return { remove, addTask, dropOnList };
};
