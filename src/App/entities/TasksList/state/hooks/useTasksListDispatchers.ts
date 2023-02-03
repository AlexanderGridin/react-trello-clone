import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { TasksListModel } from "App/entities/TasksList/TasksListModel";
import { useAppState } from "App/state/hooks/useAppState";
import { addTasksList } from "../actions/addTasksList";
import { moveTasksList } from "../actions/moveTasksList";
import { pinTasksList } from "../actions/pinTasksList";
import { pushTaskInTasksList } from "../actions/pushTaskInTasksList";
import { removeTasksList } from "../actions/removeTasksList";
import { unpinTasksList } from "../actions/unpinTasksList";

export const useTasksListDispatchers = () => {
  const { dispatch } = useAppState();

  const dispatchAddTasksList = (title: string, boardId: string) =>
    dispatch(addTasksList(new TasksListModel({ title, boardId })));

  const dispatchRemoveTasksList = (list: TasksListModel) =>
    dispatch(removeTasksList(list));

  const dispatchMoveTasksList = (
    listToMove: TasksListModel,
    listToReplace: TasksListModel
  ) => dispatch(moveTasksList(listToMove, listToReplace));

  const dispatchPushTaskInTasksList = (
    list: TasksListModel,
    task: TaskViewModel
  ) => dispatch(pushTaskInTasksList(list, task));

  const dispatchPinTasksList = (list: TasksListModel) =>
    dispatch(pinTasksList(list));

  const dispatchUnpinTasksList = (list: TasksListModel) =>
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
