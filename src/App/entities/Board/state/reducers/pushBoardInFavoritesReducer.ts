import { AppState } from "App/state/models/AppState";
import { PushBoardInFavoritesAction } from "../actions/pushBoardInFavorites";

export const pushBoardInFavoritesReducer = (
  state: AppState,
  action: PushBoardInFavoritesAction
): AppState => {
  const board = action.payload.board;

  return {
    ...state,
    favoriteBoards: [...state.favoriteBoards, board],
  };
};
