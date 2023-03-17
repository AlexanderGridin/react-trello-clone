import { PayloadAction } from "@reduxjs/toolkit";

import { BoardViewModel } from "App/entities/Board/models";
import { moveItemAfterArrayItem, moveItemBeforeArrayItem } from "shared/utils/array";
import { ArrayUtilConfigWithArrayItem } from "shared/utils/array/models";

import { IBoardsState } from "..";

interface Payload {
  boardToMove: BoardViewModel;
  boardToReplace: BoardViewModel;
}

export const moveBoardReducer = (state: IBoardsState, action: PayloadAction<Payload>) => {
  const boards = state.boards ? [...state.boards] : [];
  const boardToMove = action.payload.boardToMove;
  const boardToReplace = action.payload.boardToReplace;

  const boardToMoveIndex = boards.findIndex(({ id }: BoardViewModel) => id === boardToMove.id);
  const boardToReplaceIndex = boards.findIndex(({ id }: BoardViewModel) => id === boardToReplace.id);

  const movingConfig: ArrayUtilConfigWithArrayItem<BoardViewModel> = {
    array: boards,
    item: boardToMove,
    arrayItem: boardToReplace,
    uniqueKey: "id",
  };

  const updatedBoards =
    boardToMoveIndex < boardToReplaceIndex
      ? moveItemAfterArrayItem(movingConfig)
      : moveItemBeforeArrayItem(movingConfig);

  state.boards = updatedBoards.map((board) =>
    board.id === boardToReplace.id ? { ...board, ...boardToReplace } : { ...board }
  );
};
