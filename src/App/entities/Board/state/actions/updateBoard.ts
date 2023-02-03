import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "shared/state/utils/createAction";

interface UpdateBoardActionPayload {
  board: BoardViewModel;
}

export const updateBoard = (board: BoardViewModel) => {
  const { UpdateBoard } = AppActionType;
  const payload: UpdateBoardActionPayload = {
    board,
  };

  return createAction<typeof UpdateBoard, UpdateBoardActionPayload>(
    UpdateBoard,
    payload
  );
};

export type UpdateBoardAction = ReturnType<typeof updateBoard>;
