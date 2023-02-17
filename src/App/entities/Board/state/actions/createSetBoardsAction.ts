import { AppActionType } from "App/state/enums/AppActionType.enum";
import { Action } from "App/state/models/Action";
import { BoardViewModel } from "../../Board";

interface SetBoardsActionPayload {
  boards: BoardViewModel[] | null;
}

export type SetBoardsAction = Action<
  AppActionType.SetBoards,
  SetBoardsActionPayload
>;

export const createSetBoardsAction = (
  boards: BoardViewModel[] | null
): SetBoardsAction => ({
  type: AppActionType.SetBoards,
  payload: { boards },
});
