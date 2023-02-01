import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { useAppState } from "App/state/hooks/useAppState";
import { addTask } from "../actions/addTask";
import { moveTask } from "../actions/moveTask";
import { removeTask } from "../actions/removeTask";

export const useTaskDispatchers = () => {
  const { dispatch } = useAppState();

  const dispatchAddTask = (task: TaskViewModel) => dispatch(addTask(task));

  const dispatchRemoveTask = (task: TaskViewModel) =>
    dispatch(removeTask(task));

  const dispatchMoveTask = (
    taskToMove: TaskViewModel,
    taskToReplace: TaskViewModel
  ) => dispatch(moveTask(taskToMove, taskToReplace));

  return { dispatchAddTask, dispatchRemoveTask, dispatchMoveTask };
};
