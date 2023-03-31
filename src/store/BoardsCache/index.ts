import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { BoardWithTasksListsViewModel } from "entities/Board/models";

export interface IBoardsCacheState {
  data: Record<string, BoardWithTasksListsViewModel>;
}

const initialState: IBoardsCacheState = {
  data: {},
};

const boardsCacheSlice = createSlice({
  name: "[BOARDS_CACHE]",
  initialState,
  reducers: {
    cacheBoard: (state: IBoardsCacheState, action: PayloadAction<{ board: BoardWithTasksListsViewModel }>) => {
      const board = action.payload.board;
      state.data[board.id] = board;
    },
    removeBoard: (state: IBoardsCacheState, action: PayloadAction<{ board: BoardWithTasksListsViewModel }>) => {
      const boardToRemove = action.payload.board;
      const cachedBoard = state.data[boardToRemove.id];

      if (cachedBoard) {
        delete state.data[action.payload.board.id];
      }
    },
    clear: (state: IBoardsCacheState) => {
      state.data = {};
    },
  },
});

export const { cacheBoard, clear } = boardsCacheSlice.actions;
export const boardsCacheReducer = boardsCacheSlice.reducer;
