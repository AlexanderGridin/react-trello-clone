import { AppState } from "App/state/models/AppState";
import { ArrayUtilConfigWithArrayItem } from "shared/utils/array/models/ArrayUtilConfigWithArrayItem";
import { moveItemAfterArrayItem } from "shared/utils/array/moveItemAfterArrayItem/moveItemAfterArrayItem";
import { moveItemBeforeArrayItem } from "shared/utils/array/moveItemBeforeArrayItem/moveItemBeforeArrayItem";
import { BoardViewModel } from "../../models";
import { MoveBoardAction } from "../action-creators/createMoveBoardAction";

export const moveBoardReducer = (state: AppState, action: MoveBoardAction): AppState => {
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

  return { ...state, boards: updatedBoards };
};
