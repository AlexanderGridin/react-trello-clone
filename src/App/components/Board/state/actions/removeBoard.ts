import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "shared/state/utils/createAction";
import { BoardModel } from "../../models/BoardModel";

interface RemoveBoardActionPayload {
  board: BoardModel;
}

export const removeBoard = (board: BoardModel) => {
  const { RemoveBoard } = AppActionType;
  const payload: RemoveBoardActionPayload = {
    board,
  };

  return createAction<typeof RemoveBoard, RemoveBoardActionPayload>(
    RemoveBoard,
    payload
  );
};

export type RemoveBoardAction = ReturnType<typeof removeBoard>;
