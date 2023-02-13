import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "App/state/utils/createAction";
import { BoardViewModel } from "../../Board";

interface MoveBoardActionPayload {
  boardToMove: BoardViewModel;
  boardToReplace: BoardViewModel;
}

export const moveBoard = (
  boardToMove: BoardViewModel,
  boardToReplace: BoardViewModel
) => {
  const { MoveBoard } = AppActionType;
  const payload: MoveBoardActionPayload = {
    boardToMove,
    boardToReplace,
  };

  return createAction<typeof MoveBoard, MoveBoardActionPayload>(
    MoveBoard,
    payload
  );
};

export type MoveBoardAction = ReturnType<typeof moveBoard>;
