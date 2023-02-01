import { AppState } from "App/state/models/AppState";
import { removeItemFromArray } from "shared/utils/array/removeItemFromArray";
import { RemoveBoardAction } from "../actions/removeBoard";

export const removeBoardReducer = (
  state: AppState,
  action: RemoveBoardAction
): AppState => {
  const boardToRemove = action.payload.board;

  return {
    ...state,
    boards: removeItemFromArray({
      array: state.boards,
      item: boardToRemove,
      uniqueKey: "id",
    }),
  };
};
