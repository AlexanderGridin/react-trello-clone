import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "App/state/utils/createAction";
import { BoardWithTasksListsViewModel } from "../../BoardWithTasksLists";

interface CacheBoardActionPayload {
  board: BoardWithTasksListsViewModel;
}

export const cacheBoard = (board: BoardWithTasksListsViewModel) => {
  const { CacheBoard } = AppActionType;
  const payload: CacheBoardActionPayload = {
    board,
  };

  return createAction<typeof CacheBoard, CacheBoardActionPayload>(
    CacheBoard,
    payload
  );
};

export type CacheBoardAction = ReturnType<typeof cacheBoard>;
