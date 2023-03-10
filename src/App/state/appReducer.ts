import { AppState } from "./models/AppState";
import { TAppAction } from "./types/TAppAction";
import { appDraggedItemReducer } from "App/entities/AppDraggedItem/state";

export const appReducer = (state: AppState, action: TAppAction): AppState => {
  switch (action.module) {
    case "AppDraggedItem":
      return appDraggedItemReducer(state, action);

    default:
      return { ...state };
  }
};
