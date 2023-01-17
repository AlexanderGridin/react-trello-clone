import { TasksListModel } from "components/TasksList/models/TasksListModel";
import { RemoveListAction } from "state/actions/list/removeList";
import { AppState } from "state/models/AppState";

export const removeListReducer = (
  state: AppState,
  action: RemoveListAction
): AppState => {
  const tasksLists = state.tasksLists.filter(
    (list: TasksListModel) => list.id !== action.payload.id
  );

  return {
    ...state,
    tasksLists,
  };
};
