import { AppState } from "App/state/models/AppState";
import { CacheBoardAction } from "../actions/cacheBoard";

export const cacheBoardReducer = (
  state: AppState,
  action: CacheBoardAction
): AppState => {
  const board = action.payload.board;

  return {
    ...state,
    boardsCache: {
      ...state.boardsCache,
      [board.id]: { ...board },
    },
  };
};
