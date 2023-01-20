import { TasksListModel } from "App/components/Board/components/TasksList/models/TasksListModel";
import { AppState } from "App/state/models/AppState";
import { RemoveTasksListAction } from "../actions/removeTasksList";

export const removeTasksListReducer = (
  state: AppState,
  action: RemoveTasksListAction
): AppState => {
  const tasksLists = state.tasksLists.filter(
    (list: TasksListModel) => list.id !== action.payload.id
  );

  return {
    ...state,
    tasksLists,
  };
};
