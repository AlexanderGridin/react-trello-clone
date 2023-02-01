import { BoardModel } from "App/entities/Board/BoardModel";
import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "shared/state/utils/createAction";

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
