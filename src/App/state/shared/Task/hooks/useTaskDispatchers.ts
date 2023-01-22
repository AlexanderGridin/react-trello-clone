import { useAppState } from "App/state/hooks/useAppState";
import { addTask } from "../actions/addTask";
import { removeTask } from "../actions/removeTask";

export const useTaskDispatchers = () => {
  const { dispatch } = useAppState();

  const dispatchAddTask = (content: string, listId: string) =>
    dispatch(addTask(content, listId));
  const dispatchRemoveTask = (listId: string, taskId: string) =>
    dispatch(removeTask(listId, taskId));

  return { dispatchAddTask, dispatchRemoveTask };
};
