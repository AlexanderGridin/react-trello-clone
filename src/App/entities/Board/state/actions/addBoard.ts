import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "App/state/utils/createAction";
import { BoardViewModel } from "../../Board";

interface AddBoardActionPayload {
  board: BoardViewModel;
}

export const addBoard = (board: BoardViewModel) => {
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
