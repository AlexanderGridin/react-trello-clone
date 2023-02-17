import { AppActionType } from "App/state/enums/AppActionType.enum";
import { AppAction } from "App/state/models/AppAction";
import { AppState } from "App/state/models/AppState";
import { SetAppDraggedItemAction } from "./actions/createSetAppDraggedItemAction";
import { setAppDraggedItemReducer } from "./reducers/setAppDraggedItemReducer";

export * from "./hooks/useAppDraggedItemDispatcher";

export type AppDraggedItemAction = SetAppDraggedItemAction;
export type AppDraggedItemModuleAction = {
  module: "AppDraggedItem";
} & AppDraggedItemAction;

export const appDraggedItemReducer = (
  state: AppState,
  action: AppAction
): AppState => {
  switch (action.type) {
    case AppActionType.SetAppDraggedItem:
      return setAppDraggedItemReducer(state, action);

    default:
      return { ...state };
  }
};
