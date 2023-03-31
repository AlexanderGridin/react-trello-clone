import { createSlice } from "@reduxjs/toolkit";

import { BoardViewModel } from "entities/Board/models";

import {
  moveBoardReducer,
  removeBoardReducer,
  setBoardsReducer,
  setIsShowFavoritesReducer,
  updateBoardReducer,
  addBoardReducer,
} from "./reducers";

export interface IBoardsState {
  boards: BoardViewModel[] | null;
  isShowFavorites: boolean;
}

const initialState: IBoardsState = {
  boards: null,
  isShowFavorites: false,
};

const boardsSlice = createSlice({
  name: "[BOARDS]",
  initialState,
  reducers: {
    addBoard: addBoardReducer,
    moveBoard: moveBoardReducer,
    removeBoard: removeBoardReducer,
    setBoards: setBoardsReducer,
    setIsShowFavorites: setIsShowFavoritesReducer,
    updateBoard: updateBoardReducer,
  },
});

export const { addBoard, moveBoard, removeBoard, setBoards, setIsShowFavorites, updateBoard } = boardsSlice.actions;
export const boardsReducer = boardsSlice.reducer;
