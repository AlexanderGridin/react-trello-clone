import { createSlice } from "@reduxjs/toolkit";
import { BoardViewModel, BoardWithTasksListsViewModel } from "../models";

import {
  cacheBoardReducer,
  clearBoardsCacheReducer,
  moveBoardReducer,
  removeBoardReducer,
  setBoardsReducer,
  setIsShowFavoritesReducer,
  updateBoardReducer,
} from "./reducers";

import { addBoardReducer } from "./reducers/addBoardReducer";

export interface BoardsState {
  boards: BoardViewModel[] | null;
  boardsCache: Record<string, BoardWithTasksListsViewModel>;
  isShowFavorites: boolean;
}

const initialState: BoardsState = {
  boards: null,
  boardsCache: {},
  isShowFavorites: false,
};

const boardsSlice = createSlice({
  name: "boards",
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
} = boardsSlice.actions;

export const boardsReducer = boardsSlice.reducer;
