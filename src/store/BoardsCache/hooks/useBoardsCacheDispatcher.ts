import { useDispatch } from "store/hooks/useDispatch";
import { BoardWithTasksListsViewModel } from "entities/Board/models";

import { cacheBoard as cacheBoardAction, clear as clearAction } from "..";

export const useBoardsCacheDispatcher = () => {
  const dispatch = useDispatch();

  const cacheBoard = (board: BoardWithTasksListsViewModel) => dispatch(cacheBoardAction({ board }));
  const clearCache = () => dispatch(clearAction());

  return { cacheBoard, clearCache };
};
