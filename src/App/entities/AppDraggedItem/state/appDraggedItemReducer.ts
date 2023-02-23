import { AppAction } from "App/state/models/AppAction";
import { AppState } from "App/state/models/AppState";
import { AppDraggedItemActionType } from "./AppDraggedItemActionType.enum";
import { setAppDraggedItemReducer } from "./reducers/setAppDraggedItemReducer";

export const appDraggedItemReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case AppDraggedItemActionType.SetAppDraggedItem:
      return setAppDraggedItemReducer(state, action);

    default:
      return { ...state };
  }
};
