import { AppState } from "App/state/models/AppState";
import { AddTasksListAction } from "../actions/addTasksList";
import { TasksListModel } from "../../models/TasksListModel";

export const addTasksListReducer = (
  state: AppState,
  action: AddTasksListAction
): AppState => {
  const listToAdd: TasksListModel = { ...action.payload.list };

  return {
    ...state,
    tasksLists: [...state.tasksLists, listToAdd],
  };
};
