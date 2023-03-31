import { useDispatch } from "store/hooks/useDispatch";
import { TaskViewModel } from "entities/Task/models";

import {
  addTask as addTaskAction,
  moveTask as moveTaskAction,
  removeTask as removeTaskAction,
  updateTask as updateTaskAction,
} from "../..";

export const useTaskDispatcher = () => {
  const dispatch = useDispatch();

  const addTask = (task: TaskViewModel) => dispatch(addTaskAction({ task }));
  const removeTask = (task: TaskViewModel) => dispatch(removeTaskAction({ task }));
  const updateTask = (task: TaskViewModel) => dispatch(updateTaskAction({ task }));

  const moveTask = (taskToMove: TaskViewModel, taskToReplace: TaskViewModel) =>
    dispatch(moveTaskAction({ taskToMove, taskToReplace }));

  return { addTask, removeTask, moveTask, updateTask };
};
