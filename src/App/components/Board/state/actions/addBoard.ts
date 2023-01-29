import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "shared/state/utils/createAction";
import { BoardModel } from "../../models/BoardModel";

interface AddBoardActionPayload {
  board: BoardModel;
}

export const addBoard = (board: BoardModel) => {
  const { AddBoard } = AppActionType;
  const payload: AddBoardActionPayload = {
    board,
  };

  return createAction<typeof AddBoard, AddBoardActionPayload>(
    AddBoard,
    payload
  );
};

export type AddBoardAction = ReturnType<typeof addBoard>;
