import { AppState } from "App/state/models/AppState";
import { removeItemFromArray } from "shared/utils/array/removeItemFromArray/removeItemFromArray";
import { RemoveBoardFromFavoritesAction } from "../actions/removeBoardFromFavorites";

export const removeBoardFromFavoritesReducer = (
  state: AppState,
  action: RemoveBoardFromFavoritesAction
): AppState => {
  const board = action.payload.board;

  return {
    ...state,
    favoriteBoards: removeItemFromArray({
      array: state.favoriteBoards,
      item: board,
      uniqueKey: "id",
    }),
  };
};
