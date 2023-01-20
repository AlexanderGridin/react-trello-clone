import { AppState } from "App/state/models/AppState";
import { SetDraggedItemAction } from "../actions/setDraggedItem";

export const setDraggedItemReducer = (
  state: AppState,
  action: SetDraggedItemAction
): AppState => ({
  ...state,
  draggedItem: action.payload.item,
});
