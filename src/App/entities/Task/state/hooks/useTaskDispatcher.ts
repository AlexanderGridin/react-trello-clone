import { useAppState } from "App/state/hooks/useAppState";
import { TaskAction } from "..";
import { TaskViewModel } from "../../models";
import { createAddTaskAction } from "../action-creators/createAddTaskAction";
import { createMoveTaskAction } from "../action-creators/createMoveTaskAction";
import { createRemoveTaskAction } from "../action-creators/createRemoveTaskAction";
import { createUpdateTaskAction } from "../action-creators/createUpdateTaskAction";

export const useTaskDispatcher = () => {
  const { dispatch } = useAppState();

  const dispatchForModule = (action: TaskAction) =>
    dispatch({
      module: "Task",
      ...action,
    });

  const addTask = (task: TaskViewModel) => dispatchForModule(createAddTaskAction(task));
  const removeTask = (task: TaskViewModel) => dispatchForModule(createRemoveTaskAction(task));
  const updateTask = (task: TaskViewModel) => dispatchForModule(createUpdateTaskAction(task));

  const moveTask = (taskToMove: TaskViewModel, taskToReplace: TaskViewModel) =>
    dispatchForModule(createMoveTaskAction(taskToMove, taskToReplace));

  return { addTask, removeTask, moveTask, updateTask };
};
