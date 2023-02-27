import { AppState } from "./models/AppState";

export const INITIAL_STATE: AppState = {
  user: null,
  boards: null,
  boardsCache: {},
  isShowFavorites: false,
  draggedItem: null,
};
