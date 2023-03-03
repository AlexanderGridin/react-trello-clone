import { AppState } from "App/state/models/AppState";
import { removeItemFromArray } from "shared/utils/array/removeItemFromArray/removeItemFromArray";
import { RemoveBoardAction } from "../action-creators/createRemoveBoardAction";

export const removeBoardReducer = (state: AppState, action: RemoveBoardAction): AppState => {
  const boardToRemove = action.payload.board;
  const boardsCache = { ...state.boardsCache };

  if (boardsCache[boardToRemove.id]) {
    delete boardsCache[boardToRemove.id];
  }

  return {
    ...state,
    boards: removeItemFromArray({
      array: state.boards ?? [],
      item: boardToRemove,
      uniqueKey: "id",
    }),
    boardsCache,
  };
};
