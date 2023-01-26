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

  const remove = () => dispatchRemoveTasksList(list);

  const removeTask = (task: TaskModel) => () => dispatchRemoveTask(task);

  const addTask = (content: string) =>
    dispatchAddTask(
      new TaskModel({
        listId: list.id,
        content,
      })
    );

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

  const dropOnTask = (task: TaskModel) => (draggedItem: AppDraggedItem) => {
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

  return { remove, removeTask, addTask, dropOnList, dropOnTask };
};
