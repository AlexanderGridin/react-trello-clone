import { AppState } from "App/state/models/AppState";
import { SetAppDraggedItemAction } from "../actions/createSetAppDraggedItemAction";

export const setAppDraggedItemReducer = (state: AppState, action: SetAppDraggedItemAction): AppState => ({
  ...state,
  draggedItem: action.payload.item,
});
