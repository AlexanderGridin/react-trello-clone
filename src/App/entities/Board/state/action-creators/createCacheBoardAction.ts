import { Action } from "App/state/models/Action";
import { BoardWithTasksListsViewModel } from "../../BoardWithTasksLists";
import { BoardActionType } from "../BoardActionType.enum";

interface CacheBoardActionPayload {
  board: BoardWithTasksListsViewModel;
}

export type CacheBoardAction = Action<BoardActionType.CacheBoard, CacheBoardActionPayload>;

export const createCacheBoardAction = (board: BoardWithTasksListsViewModel): CacheBoardAction => ({
  type: BoardActionType.CacheBoard,
  payload: { board },
});
