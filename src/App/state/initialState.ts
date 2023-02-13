import { AppState } from "./models/AppState";

export const INITIAL_STATE: AppState = {
  boards: null,
  boardsCache: {},
  isShowFavorites: false,
  draggedItem: null,
};
