import { AppState } from "./models/AppState";
import { AppAction } from "./models/AppAction";
import { appDraggedItemReducer } from "App/entities/AppDraggedItem/state";

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.module) {
    case "AppDraggedItem":
      return appDraggedItemReducer(state, action);

    default:
      return { ...state };
  }
};
