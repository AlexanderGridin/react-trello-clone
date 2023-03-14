import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { boardsReducer } from "App/store/Boards";
import { userReducer } from "App/store/User";
import { boardPageReducer } from "App/store/BoardPage";
import { boardsCacheReducer } from "./BoardsCache";

const reducer = combineReducers({
  USER: userReducer,
  BOARDS: boardsReducer,
  BOARD_PAGE: boardPageReducer,
  BOARDS_CACHE: boardsCacheReducer,
});

export const store = configureStore({
  reducer,
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
