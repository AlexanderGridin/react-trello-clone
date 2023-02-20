import { AppActionType } from "App/state/enums/AppActionType.enum";
import { Action } from "App/state/models/Action";
import { BoardWithTasksListsViewModel } from "../../BoardWithTasksLists";

interface CacheBoardActionPayload {
  board: BoardWithTasksListsViewModel;
}

export type CacheBoardAction = Action<AppActionType.CacheBoard, CacheBoardActionPayload>;

export const createCacheBoardAction = (board: BoardWithTasksListsViewModel): CacheBoardAction => ({
  type: AppActionType.CacheBoard,
  payload: { board },
});
