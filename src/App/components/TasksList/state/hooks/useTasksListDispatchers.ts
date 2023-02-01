import { TaskModel } from "App/entities/Task/TaskModel";
import { useAppState } from "App/state/hooks/useAppState";
import { TasksListModel } from "../../models/TasksListModel";
import { addTasksList } from "../actions/addTasksList";
import { moveTasksList } from "../actions/moveTasksList";
import { pushTaskInTasksList } from "../actions/pushTaskInTasksList";
import { removeTasksList } from "../actions/removeTasksList";

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

  const dispatchPushTaskInTasksList = (list: TasksListModel, task: TaskModel) =>
    dispatch(pushTaskInTasksList(list, task));

  return {
    dispatchAddTasksList,
    dispatchRemoveTasksList,
    dispatchMoveTasksList,
    dispatchPushTaskInTasksList,
  };
};
