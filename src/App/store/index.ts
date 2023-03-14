import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { boardsReducer } from "App/store/Boards";
import { userReducer } from "App/store/User";
import { openedBoardReducer } from "App/store/OpenedBoard";
import { boardsCacheReducer } from "./BoardsCache";

const reducer = combineReducers({
  USER: userReducer,
  BOARDS: boardsReducer,
  OPENED_BOARD: openedBoardReducer,
  BOARDS_CACHE: boardsCacheReducer,
});

export const store = configureStore({
  reducer,
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
