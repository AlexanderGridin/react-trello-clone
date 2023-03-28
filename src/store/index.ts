import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { userReducer } from "./User";
import { boardsReducer } from "./Boards";
import { openedBoardReducer } from "./OpenedBoard";
import { boardsCacheReducer } from "./BoardsCache";
import { appDraggedItemReducer } from "./AppDraggedItem";

const reducer = combineReducers({
  USER: userReducer,
  BOARDS: boardsReducer,
  OPENED_BOARD: openedBoardReducer,
  BOARDS_CACHE: boardsCacheReducer,
  DRAGGED_ITEM: appDraggedItemReducer,
});

export const store = configureStore({
  reducer,
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
