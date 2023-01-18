import { useAppState } from "App/state/hooks/useAppState";
import { removeList } from "App/state/actions/list/removeList";
import { addTask } from "App/state/actions/task/addTask";
import { removeTask } from "App/state/actions/task/removeTask";
import { TasksListModel } from "../models/TasksListModel";

export const useTasksListActions = (list: TasksListModel) => {
  const { dispatch } = useAppState();

  const remove = () => dispatch(removeList(list.id));
  const removeSelectedTask = (listId: string, taskId: string) =>
    dispatch(removeTask(listId, taskId));
  const addNewTask = (content: string) => dispatch(addTask(content, list.id));

  return { remove, removeSelectedTask, addNewTask };
};
