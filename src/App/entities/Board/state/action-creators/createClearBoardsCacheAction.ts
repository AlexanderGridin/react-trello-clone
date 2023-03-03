import { Action } from "App/state/models/Action";
import { BoardActionType } from "../BoardActionType.enum";

export type ClearBoardsCacheAction = Action<BoardActionType.ClearBoardsCache, null>;

export const createClearBoardsCacheAction = (): ClearBoardsCacheAction => ({
  type: BoardActionType.ClearBoardsCache,
  payload: null,
});
