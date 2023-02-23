import { Action } from "App/state/models/Action";
import { BoardViewModel } from "../../Board";
import { BoardActionType } from "../BoardActionType.enum";

interface AddBoardActionPayload {
  board: BoardViewModel;
}

export type AddBoardAction = Action<BoardActionType.AddBoard, AddBoardActionPayload>;

export const createAddBoardAction = (board: BoardViewModel): AddBoardAction => ({
  type: BoardActionType.AddBoard,
  payload: { board },
});
