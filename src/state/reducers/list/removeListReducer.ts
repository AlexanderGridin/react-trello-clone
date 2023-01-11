import { TasksList } from "shared/models/TasksList.model";
import { RemoveListAction } from "state/actions/list/removeList";
import { AppState } from "state/models/AppState.model";

export const removeListReducer = (
  state: AppState,
  action: RemoveListAction
): AppState => {
  const tasksLists = state.tasksLists.filter(
    (list: TasksList) => list.id !== action.payload.id
  );

  return {
    ...state,
    tasksLists,
  };
};
