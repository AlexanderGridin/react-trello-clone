import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "App/state/utils/createAction";
import { BoardViewModel } from "../../Board";

interface RemoveBoardActionPayload {
  board: BoardViewModel;
}

export const removeBoard = (board: BoardViewModel) => {
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
