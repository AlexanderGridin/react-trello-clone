import { PayloadAction } from "@reduxjs/toolkit";
import { BoardWithTasksListsViewModel } from "App/entities/Board/models";
import { BoardsPageState } from "..";

interface Payload {
  board: BoardWithTasksListsViewModel;
}

export const cacheBoardReducer = (state: BoardsPageState, action: PayloadAction<Payload>) => {
  const id = action.payload.board.id;
  state.boardsCache[id] = action.payload.board;
};
