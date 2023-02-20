import { AppState } from "App/state/models/AppState";
import { CacheBoardAction } from "../action-creators/createCacheBoardAction";

export const cacheBoardReducer = (state: AppState, action: CacheBoardAction): AppState => {
  const board = action.payload.board;

  return {
    ...state,
    boardsCache: {
      ...state.boardsCache,
      [board.id]: { ...board },
    },
  };
};
