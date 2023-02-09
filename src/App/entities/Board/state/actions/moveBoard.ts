import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "App/state/utils/createAction";

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
