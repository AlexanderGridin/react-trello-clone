import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { useAppState } from "App/state/hooks/useAppState";
import { addTasksList } from "../actions/addTasksList";
import { moveTasksList } from "../actions/moveTasksList";
import { pinTasksList } from "../actions/pinTasksList";
import { pushTaskInTasksList } from "../actions/pushTaskInTasksList";
import { removeTasksList } from "../actions/removeTasksList";
import { unpinTasksList } from "../actions/unpinTasksList";

export const useTasksListDispatchers = () => {
  const { dispatch } = useAppState();

  const dispatchAddTasksList = (list: TasksListViewModel) =>
    dispatch(addTasksList(list));

  const dispatchRemoveTasksList = (list: TasksListViewModel) =>
    dispatch(removeTasksList(list));

  const dispatchMoveTasksList = (
    listToMove: TasksListViewModel,
    listToReplace: TasksListViewModel
  ) => dispatch(moveTasksList(listToMove, listToReplace));

  const dispatchPushTaskInTasksList = (
    list: TasksListViewModel,
    task: TaskViewModel
  ) => dispatch(pushTaskInTasksList(list, task));

  const dispatchPinTasksList = (list: TasksListViewModel) =>
    dispatch(pinTasksList(list));

  const dispatchUnpinTasksList = (list: TasksListViewModel) =>
    dispatch(unpinTasksList(list));

  return {
    dispatchAddTasksList,
    dispatchRemoveTasksList,
    dispatchMoveTasksList,
    dispatchPushTaskInTasksList,
    dispatchPinTasksList,
    dispatchUnpinTasksList,
  };
};
