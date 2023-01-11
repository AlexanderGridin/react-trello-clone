import { AppState } from "state/models/AppState.model";
import { AppAction } from "state/models/AppAction.model";
import { ActionType } from "state/enums/ActionType.enum";
import { addTaskReducer } from "state/reducers/task/addTaskReducer";
import { addListReducer } from "state/reducers/list/addListReducer";
import { removeListReducer } from "./reducers/list/removeListReducer";
import { removeTaskReducer } from "./reducers/task/removeTaskReducer";

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case ActionType.AddList:
      return addListReducer(state, action);

    case ActionType.RemoveList:
      return removeListReducer(state, action);

    case ActionType.AddTask:
      return addTaskReducer(state, action);

    case ActionType.RemoveTask:
      return removeTaskReducer(state, action);

    default:
      return { ...state };
  }
};
