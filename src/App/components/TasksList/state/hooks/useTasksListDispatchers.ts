import { TaskModel } from "App/components/Task/models/TaskModel";
import { useAppState } from "App/state/hooks/useAppState";
import { TasksListModel } from "../../models/TasksListModel";
import { addTasksList } from "../actions/addTasksList";
import { moveTasksList } from "../actions/moveTasksList";
import { pushTaskInTasksList } from "../actions/pushTaskInTasksList";
import { removeTasksList } from "../actions/removeTasksList";

export const useTasksListDispatchers = () => {
  const { dispatch } = useAppState();

  const dispatchAddTasksList = (title: string) => dispatch(addTasksList(title));

  const dispatchRemoveTasksList = (listId: string) =>
    dispatch(removeTasksList(listId));

  const dispatchMoveTasksList = (
    listToMove: TasksListModel,
    listToOffset: TasksListModel
  ) => dispatch(moveTasksList(listToMove, listToOffset));

  const dispatchPushTaskInTasksList = (list: TasksListModel, task: TaskModel) =>
    dispatch(pushTaskInTasksList(list, task));

  return {
    dispatchAddTasksList,
    dispatchRemoveTasksList,
    dispatchMoveTasksList,
    dispatchPushTaskInTasksList,
  };
};
