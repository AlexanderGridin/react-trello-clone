import { TasksListModel } from "../models/TasksListModel";
import { useTasksListDispatchers } from "../state/hooks/useTasksListDispatchers";
import { AppDraggedItem } from "App/models/AppDraggedItem";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { TaskModel } from "App/components/Task/models/TaskModel";
import { useTaskDispatchers } from "App/components/Task/state/hooks/useTaskDispatchers";

export const useTasksListActions = (list: TasksListModel) => {
  const { dispatchRemoveTasksList, dispatchMoveTasksList } =
    useTasksListDispatchers();
  const { dispatchAddTask, dispatchRemoveTask, dispatchMoveTask } =
    useTaskDispatchers();

  const remove = () => dispatchRemoveTasksList(list.id);
  const removeTask = (task: TaskModel) => () =>
    dispatchRemoveTask(list.id, task.id);
  const addTask = (content: string) => dispatchAddTask(content, list.id);

  const drop = (draggedItem: AppDraggedItem) => {
    console.log(draggedItem.type);
    if (draggedItem.type === DraggedItemType.TasksList) {
      dispatchMoveTasksList(draggedItem.data, list);
    }
  };
  const dropTask = (task: TaskModel) => (draggedItem: AppDraggedItem) => {
    if (draggedItem.type === DraggedItemType.Task) {
      dispatchMoveTask(draggedItem.data, task);
    }
  };

  return { remove, removeTask, addTask, drop, dropTask };
};
