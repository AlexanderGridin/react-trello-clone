import { generateId } from "shared/utils/generateId";
import { AddListAction } from "App/state/actions/list/addList";
import { AppState } from "App/state/models/AppState";

export const addListReducer = (
  state: AppState,
  action: AddListAction
): AppState => {
  return {
    ...state,
    tasksLists: [
      ...state.tasksLists,
      { id: generateId(), title: action.payload.title, tasks: [] },
    ],
  };
};
