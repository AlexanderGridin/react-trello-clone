import { PayloadAction } from "@reduxjs/toolkit";
import { BoardsState } from "..";
import { BoardWithTasksListsViewModel } from "../../models";

interface Payload {
  board: BoardWithTasksListsViewModel;
}

export const cacheBoardReducer = (state: BoardsState, action: PayloadAction<Payload>) => {
  const id = action.payload.board.id;
  state.boardsCache[id] = action.payload.board;
};
