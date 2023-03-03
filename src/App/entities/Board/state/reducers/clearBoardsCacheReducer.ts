import { AppState } from "App/state/models/AppState";

export const clearBoardsCacheReducer = (state: AppState): AppState => ({
  ...state,
  boardsCache: {},
});
