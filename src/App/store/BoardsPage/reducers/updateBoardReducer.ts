import { PayloadAction } from "@reduxjs/toolkit";
import { BoardViewModel } from "App/entities/Board/models";
import { BoardsState } from "..";

interface Payload {
  board: BoardViewModel;
}

export const updateBoardReducer = (state: BoardsState, action: PayloadAction<Payload>) => {
  const boardToUpdate = action.payload.board;

  state.boards =
    state.boards?.map((board: BoardViewModel) => {
      if (board.id !== boardToUpdate.id) {
        return { ...board };
      }

      return {
        ...boardToUpdate,
      };
    }) ?? [];

  if (state.boardsCache[boardToUpdate.id]) {
    state.boardsCache[boardToUpdate.id] = {
      ...state.boardsCache[boardToUpdate.id],
      isFavorite: boardToUpdate.isFavorite,
      title: boardToUpdate.title,
    };
  }
};
