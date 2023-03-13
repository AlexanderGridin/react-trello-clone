import { TAppAction } from "App/state/types/TAppAction";
import { AppState } from "App/state/models/AppState";
import { AppDraggedItemActionType } from "./AppDraggedItemActionType.enum";
import { setAppDraggedItemReducer } from "./reducers/setAppDraggedItemReducer";

export const appDraggedItemReducer = (state: AppState, action: TAppAction): AppState => {
  switch (action.type) {
    case AppDraggedItemActionType.SetAppDraggedItem:
      return setAppDraggedItemReducer(state, action);

    default:
      return { ...state };
  }
};
