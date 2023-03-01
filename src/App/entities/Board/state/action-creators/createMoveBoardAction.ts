import { Action } from "App/state/models/Action";
import { BoardViewModel } from "../../models";
import { BoardActionType } from "../BoardActionType.enum";

interface MoveBoardActionPayload {
  boardToMove: BoardViewModel;
  boardToReplace: BoardViewModel;
}

export type MoveBoardAction = Action<BoardActionType.MoveBoard, MoveBoardActionPayload>;

export const createMoveBoardAction = (
  boardToMove: BoardViewModel,
  boardToReplace: BoardViewModel
): MoveBoardAction => ({
  type: BoardActionType.MoveBoard,
  payload: {
    boardToMove,
    boardToReplace,
  },
});
