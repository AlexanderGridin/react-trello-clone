import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "shared/state/utils/createAction";
import { BoardModel } from "../../models/BoardModel";

interface MoveBoardActionPayload {
  boardToMove: BoardModel;
  boardToReplace: BoardModel;
}

export const moveBoard = (
  boardToMove: BoardModel,
  boardToReplace: BoardModel
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
