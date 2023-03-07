import { PayloadAction } from "@reduxjs/toolkit";
import { BoardViewModel } from "App/entities/Board/models";
import { BoardsPageState } from "..";

interface Payload {
  board: BoardViewModel;
}

export const addBoardReducer = (state: BoardsPageState, action: PayloadAction<Payload>) => {
  if (state.boards) {
    state.boards.push(action.payload.board);
    return;
  }

  state.boards = [action.payload.board];
};
