import { generateId } from "shared/utils/generateId";
import { AddListAction } from "state/actions/list/addList";
import { AppState } from "state/models/AppState";

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
