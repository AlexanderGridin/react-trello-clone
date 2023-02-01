import { TaskModel } from "App/entities/Task/TaskModel";
import { useAppState } from "App/state/hooks/useAppState";
import { addTask } from "../actions/addTask";
import { moveTask } from "../actions/moveTask";
import { removeTask } from "../actions/removeTask";

export const useTaskDispatchers = () => {
  const { dispatch } = useAppState();

  const dispatchAddTask = (task: TaskModel) => dispatch(addTask(task));

  const dispatchRemoveTask = (task: TaskModel) => dispatch(removeTask(task));

  const dispatchMoveTask = (taskToMove: TaskModel, taskToReplace: TaskModel) =>
    dispatch(moveTask(taskToMove, taskToReplace));

  return { dispatchAddTask, dispatchRemoveTask, dispatchMoveTask };
};
