import { useTaskDispatchers } from "App/state/shared/Task/hooks/useTaskDispatchers";
import { TasksListModel } from "../models/TasksListModel";
import { useTasksListDispatchers } from "../state/hooks/useTasksListDispatchers";

export const useTasksListActions = (list: TasksListModel) => {
  const { dispatchRemoveTasksList } = useTasksListDispatchers();
  const { dispatchAddTask, dispatchRemoveTask } = useTaskDispatchers();

  const remove = () => dispatchRemoveTasksList(list.id);
  const removeTask = (taskId: string) => dispatchRemoveTask(list.id, taskId);
  const addTask = (content: string) => dispatchAddTask(content, list.id);

  return { remove, removeTask, addTask };
};
