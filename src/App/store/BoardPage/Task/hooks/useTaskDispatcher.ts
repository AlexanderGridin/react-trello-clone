import { TaskViewModel } from "App/entities/Task/models";
import { useDispatch } from "App/store/hooks/useDispatch";
import {
  addTask as addTaskAction,
  removeTask as removeTaskAction,
  updateTask as updateTaskAction,
  moveTask as moveTaskAction,
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
