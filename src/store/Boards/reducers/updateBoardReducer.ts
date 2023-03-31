import { PayloadAction } from "@reduxjs/toolkit";

import { BoardViewModel } from "entities/Board/models";

import { IBoardsState } from "..";

interface Payload {
  board: BoardViewModel;
}

export const updateBoardReducer = (state: IBoardsState, action: PayloadAction<Payload>) => {
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
};
