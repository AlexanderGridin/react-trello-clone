import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { boardsPageReducer } from "App/store/BoardsPage";
import { userReducer } from "App/store/User";
import { boardPageReducer } from "App/store/BoardPage";
import { boardsCacheReducer } from "./BoardsCache";

const reducer = combineReducers({
  USER: userReducer,
  BOARDS_PAGE: boardsPageReducer,
  BOARD_PAGE: boardPageReducer,
  BOARDS_CACHE: boardsCacheReducer,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
