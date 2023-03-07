import { PayloadAction } from "@reduxjs/toolkit";
import { ArrayUtilConfigWithArrayItem } from "shared/utils/array/models/ArrayUtilConfigWithArrayItem";
import { moveItemAfterArrayItem } from "shared/utils/array/moveItemAfterArrayItem/moveItemAfterArrayItem";
import { moveItemBeforeArrayItem } from "shared/utils/array/moveItemBeforeArrayItem/moveItemBeforeArrayItem";
import { BoardsState } from "..";
import { BoardViewModel } from "../../models";

interface Payload {
  boardToMove: BoardViewModel;
  boardToReplace: BoardViewModel;
}

export const moveBoardReducer = (state: BoardsState, action: PayloadAction<Payload>) => {
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

  state.boards = updatedBoards.map((board, index) => ({
    ...board,
    rank: index + 1,
  }));
};
