import { useDispatch } from "store/hooks/useDispatch";
import { TaskViewModel } from "App/entities/Task/models";
import { TasksListViewModel } from "App/entities/TasksList/models";

import {
  addTasksList as addTasksListAction,
  removeTasksList as removeTasksListAction,
  updateTasksList as updateTasksListAction,
  moveTasksList as moveTasksListAction,
  pushTaskInTasksList as pushTaskInTasksListAction,
} from "../..";

export const useTasksListDispatcher = () => {
  const dispatch = useDispatch();

  const addTasksList = (list: TasksListViewModel) => dispatch(addTasksListAction({ list }));
  const removeTasksList = (list: TasksListViewModel) => dispatch(removeTasksListAction({ list }));
  const updateTasksList = (list: TasksListViewModel) => dispatch(updateTasksListAction({ list }));

  const moveTasksList = (listToMove: TasksListViewModel, listToReplace: TasksListViewModel) =>
    dispatch(moveTasksListAction({ listToMove, listToReplace }));

  const pushTaskInTasksList = (list: TasksListViewModel, task: TaskViewModel) =>
    dispatch(pushTaskInTasksListAction({ list, task }));

  return {
    addTasksList,
    removeTasksList,
    moveTasksList,
    pushTaskInTasksList,
    updateTasksList,
  };
};
