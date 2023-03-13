import { PayloadAction } from "@reduxjs/toolkit";
import { BoardViewModel } from "App/entities/Board/models";
import { IBoardsPageState } from "..";

interface Payload {
  board: BoardViewModel;
}

export const updateBoardReducer = (state: IBoardsPageState, action: PayloadAction<Payload>) => {
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
