import { AppState } from "App/state/models/AppState";
import { ArrayUtilConfigWithArrayItem } from "shared/utils/array/models/ArrayUtilConfigWithArrayItem";
import { moveItemAfterArrayItem } from "shared/utils/array/moveItemAfterArrayItem";
import { moveItemBeforeArrayItem } from "shared/utils/array/moveItemBeforeArrayItem";
import { BoardModel } from "../../models/BoardModel";
import { MoveBoardAction } from "../actions/moveBoard";

export const moveBoardReducer = (
  state: AppState,
  action: MoveBoardAction
): AppState => {
  const boards = [...state.boards];
  const boardToMove = action.payload.boardToMove;
  const boardToReplace = action.payload.boardToReplace;

  const boardToMoveIndex = boards.findIndex(
    ({ id }: BoardModel) => id === boardToMove.id
  );
  const boardToReplaceIndex = boards.findIndex(
    ({ id }: BoardModel) => id === boardToReplace.id
  );

  const movingConfig: ArrayUtilConfigWithArrayItem<BoardModel> = {
    array: boards,
    item: boardToMove,
    arrayItem: boardToReplace,
    uniqueKey: "id",
  };

  const updatedBoards =
    boardToMoveIndex < boardToReplaceIndex
      ? moveItemAfterArrayItem(movingConfig)
      : moveItemBeforeArrayItem(movingConfig);

  return { ...state, boards: updatedBoards };
};
