import { generateId } from "shared/utils/generateId";
import { AppState } from "App/state/models/AppState";
import { AddTasksListAction } from "../actions/addTasksList";

export const addTasksListReducer = (
  state: AppState,
  action: AddTasksListAction
): AppState => {
  return {
    ...state,
    tasksLists: [
      ...state.tasksLists,
      { id: generateId(), title: action.payload.title, tasks: [] },
    ],
  };
};
