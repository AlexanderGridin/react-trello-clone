import { PayloadAction } from "@reduxjs/toolkit";
import { BoardViewModel } from "App/entities/Board/models";
import { removeItemFromArray } from "shared/utils/array/removeItemFromArray/removeItemFromArray";
import { IBoardsPageState } from "..";

interface Payload {
  board: BoardViewModel;
}

export const removeBoardReducer = (state: IBoardsPageState, action: PayloadAction<Payload>) => {
  const boardToRemove = action.payload.board;

  state.boards = removeItemFromArray({
    array: state.boards ?? [],
    item: boardToRemove,
    uniqueKey: "id",
  });
};
