import { AppActionType } from "App/state/enums/AppActionType.enum";
import { Action } from "App/state/models/Action";
import { BoardViewModel } from "../../Board";

interface MoveBoardActionPayload {
  boardToMove: BoardViewModel;
  boardToReplace: BoardViewModel;
}

export type MoveBoardAction = Action<
  AppActionType.MoveBoard,
  MoveBoardActionPayload
>;

export const createMoveBoardAction = (
  boardToMove: BoardViewModel,
  boardToReplace: BoardViewModel
): MoveBoardAction => ({
  type: AppActionType.MoveBoard,
  payload: {
    boardToMove,
    boardToReplace,
  },
});
