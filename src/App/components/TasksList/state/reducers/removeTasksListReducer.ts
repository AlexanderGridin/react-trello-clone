import { AppState } from "App/state/models/AppState";
import { TasksListModel } from "../../models/TasksListModel";
import { RemoveTasksListAction } from "../actions/removeTasksList";

export const removeTasksListReducer = (
  state: AppState,
  action: RemoveTasksListAction
): AppState => {
  const listToRemove: TasksListModel = action.payload.list;
  const tasksLists = state.tasksLists.filter(
    (list: TasksListModel) => list.id !== listToRemove.id
  );

  return {
    ...state,
    tasksLists,
  };
};
