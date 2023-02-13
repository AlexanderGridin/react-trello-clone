import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "App/state/utils/createAction";
import { BoardViewModel } from "../../Board";

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
