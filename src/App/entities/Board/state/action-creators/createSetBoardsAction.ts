import { Action } from "App/state/models/Action";
import { BoardViewModel } from "../../models";
import { BoardActionType } from "../BoardActionType.enum";

interface SetBoardsActionPayload {
  boards: BoardViewModel[] | null;
}

export type SetBoardsAction = Action<BoardActionType.SetBoards, SetBoardsActionPayload>;

export const createSetBoardsAction = (boards: BoardViewModel[] | null): SetBoardsAction => ({
  type: BoardActionType.SetBoards,
  payload: { boards },
});
