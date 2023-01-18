import { TasksListModel } from "App/components/Board/components/TasksList/models/TasksListModel";
import { RemoveListAction } from "App/state/actions/list/removeList";
import { AppState } from "App/state/models/AppState";

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
