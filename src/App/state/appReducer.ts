import { ActionType } from "App/state/enums/ActionType.enum";
import { addTaskReducer } from "App/state/reducers/task/addTaskReducer";
import { addListReducer } from "App/state/reducers/list/addListReducer";
import { removeListReducer } from "./reducers/list/removeListReducer";
import { removeTaskReducer } from "./reducers/task/removeTaskReducer";
import { AppState } from "./models/AppState";
import { AppAction } from "./models/AppAction";
import { setDraggedItemReducer } from "./reducers/setDraggedItemReducer";
import { moveListReducer } from "./reducers/list/moveListReducer";

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case ActionType.AddList:
      return addListReducer(state, action);

    case ActionType.RemoveList:
      return removeListReducer(state, action);

    case ActionType.MoveList:
      return moveListReducer(state, action);

    case ActionType.AddTask:
      return addTaskReducer(state, action);

    case ActionType.RemoveTask:
      return removeTaskReducer(state, action);

    case ActionType.SetDraggedItem:
      return setDraggedItemReducer(state, action);

    default:
      return { ...state };
  }
};
