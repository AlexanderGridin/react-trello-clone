import { SetDraggedItemAction } from "../actions/setDraggedItem";
import { AppState } from "../models/AppState";

export const setDraggedItemReducer = (
  state: AppState,
  action: SetDraggedItemAction
): AppState => ({
  ...state,
  draggedItem: action.payload.item,
});
