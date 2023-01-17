import { useAppState } from "state/hooks/useAppState";
import { removeList } from "state/actions/list/removeList";
import { addTask } from "state/actions/task/addTask";
import { removeTask } from "state/actions/task/removeTask";
import { TasksListModel } from "../models/TasksListModel";

export const useTasksListActions = (list: TasksListModel) => {
  const { dispatch } = useAppState();

  const remove = (): void => dispatch(removeList(list.id));
  const removeSelectedTask = (listId: string, taskId: string): void =>
    dispatch(removeTask(listId, taskId));
  const addNewTask = (content: string): void =>
    dispatch(addTask(content, list.id));

  return { remove, removeSelectedTask, addNewTask };
};
