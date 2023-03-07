import { PayloadAction } from "@reduxjs/toolkit";
import { BoardWithTasksListsViewModel } from "App/entities/Board/models";
import { BoardsState } from "..";

interface Payload {
  board: BoardWithTasksListsViewModel;
}

export const cacheBoardReducer = (state: BoardsState, action: PayloadAction<Payload>) => {
  const id = action.payload.board.id;
  state.boardsCache[id] = action.payload.board;
};
