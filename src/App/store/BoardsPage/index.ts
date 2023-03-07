import { createSlice } from "@reduxjs/toolkit";
import { BoardViewModel, BoardWithTasksListsViewModel } from "App/entities/Board/models";

import {
  cacheBoardReducer,
  clearBoardsCacheReducer,
  moveBoardReducer,
  removeBoardReducer,
  setBoardsReducer,
  setIsShowFavoritesReducer,
  updateBoardReducer,
  addBoardReducer,
} from "./reducers";

export interface BoardsPageState {
  boards: BoardViewModel[] | null;
  boardsCache: Record<string, BoardWithTasksListsViewModel>;
  isShowFavorites: boolean;
}

const initialState: BoardsPageState = {
  boards: null,
  boardsCache: {},
  isShowFavorites: false,
};

const boardsPageSlice = createSlice({
  name: "[BOARDS_PAGE]",
  initialState,
  reducers: {
    addBoard: addBoardReducer,
    cacheBoard: cacheBoardReducer,
    clearBoardsCache: clearBoardsCacheReducer,
    moveBoard: moveBoardReducer,
    removeBoard: removeBoardReducer,
    setBoards: setBoardsReducer,
    setIsShowFavorites: setIsShowFavoritesReducer,
    updateBoard: updateBoardReducer,
  },
});

export const {
  addBoard,
  cacheBoard,
  clearBoardsCache,
  moveBoard,
  removeBoard,
  setBoards,
  setIsShowFavorites,
  updateBoard,
} = boardsPageSlice.actions;

export const boardsPageReducer = boardsPageSlice.reducer;
