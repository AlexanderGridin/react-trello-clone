import { PayloadAction } from "@reduxjs/toolkit";

import { BoardViewModel } from "entities/Board/models";
import { removeItemFromArray } from "shared/utils/array";

import { IBoardsState } from "..";

interface Payload {
  board: BoardViewModel;
}

export const removeBoardReducer = (state: IBoardsState, action: PayloadAction<Payload>) => {
  const boardToRemove = action.payload.board;

  state.boards = removeItemFromArray({
    array: state.boards ?? [],
    item: boardToRemove,
    uniqueKey: "id",
  });
};
