import { useAppState } from "App/state/hooks/useAppState";
import { TaskModel } from "../../models/TaskModel";
import { addTask } from "../actions/addTask";
import { moveTask } from "../actions/moveTask";
import { removeTask } from "../actions/removeTask";

export const useTaskDispatchers = () => {
  const { dispatch } = useAppState();

  const dispatchAddTask = (content: string, listId: string) =>
    dispatch(addTask(content, listId));

  const dispatchRemoveTask = (task: TaskModel) => dispatch(removeTask(task));

  const dispatchMoveTask = (taskToMove: TaskModel, taskToReplace: TaskModel) =>
    dispatch(moveTask(taskToMove, taskToReplace));

  return { dispatchAddTask, dispatchRemoveTask, dispatchMoveTask };
};
