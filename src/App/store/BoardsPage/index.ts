import { createSlice } from "@reduxjs/toolkit";
import { BoardViewModel } from "App/entities/Board/models";

import {
  moveBoardReducer,
  removeBoardReducer,
  setBoardsReducer,
  setIsShowFavoritesReducer,
  updateBoardReducer,
  addBoardReducer,
} from "./reducers";

export interface IBoardsPageState {
  boards: BoardViewModel[] | null;
  isShowFavorites: boolean;
}

const initialState: IBoardsPageState = {
  boards: null,
  isShowFavorites: false,
};

const boardsPageSlice = createSlice({
  name: "[BOARDS_PAGE]",
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

export const { addBoard, moveBoard, removeBoard, setBoards, setIsShowFavorites, updateBoard } = boardsPageSlice.actions;
export const boardsPageReducer = boardsPageSlice.reducer;
