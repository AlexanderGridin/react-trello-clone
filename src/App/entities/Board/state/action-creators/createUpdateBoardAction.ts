import { Action } from "App/state/models/Action";
import { BoardViewModel } from "../../models";
import { BoardActionType } from "../BoardActionType.enum";

interface UpdateBoardActionPayload {
  board: BoardViewModel;
}

export type UpdateBoardAction = Action<BoardActionType.UpdateBoard, UpdateBoardActionPayload>;

export const createUpdateBoardAction = (board: BoardViewModel): UpdateBoardAction => ({
  type: BoardActionType.UpdateBoard,
  payload: { board },
});
