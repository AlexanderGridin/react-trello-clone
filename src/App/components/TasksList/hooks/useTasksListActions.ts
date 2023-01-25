import { TasksListModel } from "../models/TasksListModel";
import { useTasksListDispatchers } from "../state/hooks/useTasksListDispatchers";
import { AppDraggedItem } from "App/models/AppDraggedItem";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { TaskModel } from "App/components/Task/models/TaskModel";
import { useTaskDispatchers } from "App/components/Task/state/hooks/useTaskDispatchers";
import { useDraggedItemDispatchers } from "App/state/shared/DraggedItem/hooks/useDraggedItemDispatchers";

export const useTasksListActions = (list: TasksListModel) => {
  const {
    dispatchRemoveTasksList,
    dispatchMoveTasksList,
    dispatchPushTaskInTasksList,
  } = useTasksListDispatchers();

  const { dispatchAddTask, dispatchRemoveTask, dispatchMoveTask } =
    useTaskDispatchers();

  const { dispatchSetDraggedItem } = useDraggedItemDispatchers();

  const remove = () => dispatchRemoveTasksList(list.id);

  const removeTask = (task: TaskModel) => () =>
    dispatchRemoveTask(list.id, task.id);

  const addTask = (content: string) => dispatchAddTask(content, list.id);

  const dropOnList = (draggedItem: AppDraggedItem) => {
    if (draggedItem.type === DraggedItemType.TasksList) {
      dispatchMoveTasksList(draggedItem.data, list);
      return;
    }

    if (draggedItem.type !== DraggedItemType.Task || list.tasks.length) {
      return;
    }

    dispatchRemoveTask(draggedItem.data.listId, draggedItem.data.id);
    dispatchPushTaskInTasksList(list, draggedItem.data);
    dispatchSetDraggedItem({
      ...draggedItem,
      data: {
        ...draggedItem.data,
        listId: list.id,
      },
    });
  };

  const dropOnTask = (task: TaskModel) => (draggedItem: AppDraggedItem) => {
    if (draggedItem.type !== DraggedItemType.Task) {
      return;
    }

    dispatchMoveTask(draggedItem.data, task);

    if (draggedItem.data.listId === task.listId) {
      return;
    }

    dispatchSetDraggedItem({
      ...draggedItem,
      data: {
        ...draggedItem.data,
        listId: task.listId,
      },
    });
  };

  return { remove, removeTask, addTask, dropOnList, dropOnTask };
};
