import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BoardWithTasksListsViewModel } from "App/entities/Board/models";

export interface BoardsCacheState {
  data: Record<string, BoardWithTasksListsViewModel>;
}

const initialState: BoardsCacheState = {
  data: {},
};

const boardsCacheSlice = createSlice({
  name: "[BOARDS_CACHE]",
  initialState,
  reducers: {
    cacheBoard: (state: BoardsCacheState, action: PayloadAction<{ board: BoardWithTasksListsViewModel }>) => {
      const board = action.payload.board;
      state.data[board.id] = board;
    },
    removeBoard: (state: BoardsCacheState, action: PayloadAction<{ board: BoardWithTasksListsViewModel }>) => {
      const boardToRemove = action.payload.board;
      const cachedBoard = state.data[boardToRemove.id];

      if (cachedBoard) {
        delete state.data[action.payload.board.id];
      }
    },
    clear: (state: BoardsCacheState) => {
      state.data = {};
    },
  },
});

export const { cacheBoard, clear } = boardsCacheSlice.actions;
export const boardsCacheReducer = boardsCacheSlice.reducer;
