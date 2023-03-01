import { Action } from "App/state/models/Action";
import { BoardViewModel } from "../../models";
import { BoardActionType } from "../BoardActionType.enum";

interface RemoveBoardActionPayload {
  board: BoardViewModel;
}

export type RemoveBoardAction = Action<BoardActionType.RemoveBoard, RemoveBoardActionPayload>;

export const createRemoveBoardAction = (board: BoardViewModel): RemoveBoardAction => ({
  type: BoardActionType.RemoveBoard,
  payload: { board },
});
