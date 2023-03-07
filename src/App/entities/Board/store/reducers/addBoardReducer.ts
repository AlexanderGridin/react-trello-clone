import { PayloadAction } from "@reduxjs/toolkit";
import { BoardsState } from "..";
import { BoardViewModel } from "../../models";

interface Payload {
  board: BoardViewModel;
}

export const addBoardReducer = (state: BoardsState, action: PayloadAction<Payload>) => {
  if (state.boards) {
    state.boards.push(action.payload.board);
    return;
  }

  state.boards = [action.payload.board];
};
