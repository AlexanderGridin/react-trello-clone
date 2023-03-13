import { AppState } from "App/state/models/AppState";
import { TSetAppDraggedItemAction } from "../action-creators/createSetAppDraggedItemAction";

export const setAppDraggedItemReducer = (state: AppState, action: TSetAppDraggedItemAction): AppState => ({
  ...state,
  draggedItem: action.payload.item,
});
