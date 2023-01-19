import { SetDraggedItemAction } from "../actions/setDraggedItem";
import { AppState } from "../models/AppState";

export const setDraggedItemReducer = (
  state: AppState,
  action: SetDraggedItemAction
): AppState => {
  const draggedItem = action.payload.item;

  return {
    ...state,
    draggedItem,
  };
};
