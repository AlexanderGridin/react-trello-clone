import { PayloadAction } from "@reduxjs/toolkit";
import { BoardViewModel } from "App/entities/Board/models";
import { removeItemFromArray } from "shared/utils/array/removeItemFromArray/removeItemFromArray";
import { BoardsState } from "..";

interface Payload {
  board: BoardViewModel;
}

export const removeBoardReducer = (state: BoardsState, action: PayloadAction<Payload>) => {
  const boardToRemove = action.payload.board;
  const boardsCache = { ...state.boardsCache };

  if (boardsCache[boardToRemove.id]) {
    delete boardsCache[boardToRemove.id];
  }

  state.boards = removeItemFromArray({
    array: state.boards ?? [],
    item: boardToRemove,
    uniqueKey: "id",
  });

  state.boardsCache = boardsCache;
};
