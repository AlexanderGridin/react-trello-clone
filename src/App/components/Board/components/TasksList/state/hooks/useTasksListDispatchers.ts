import { useAppState } from "App/state/hooks/useAppState";
import { TasksListModel } from "../../models/TasksListModel";
import { addTasksList } from "../actions/addTasksList";
import { moveTasksList } from "../actions/moveTasksList";
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

  return {
    dispatchAddTasksList,
    dispatchRemoveTasksList,
    dispatchMoveTasksList,
  };
};
