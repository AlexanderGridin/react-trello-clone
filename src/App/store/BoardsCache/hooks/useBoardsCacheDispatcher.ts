import { BoardWithTasksListsViewModel } from "App/entities/Board/models";
import { useDispatch } from "App/store/hooks/useDispatch";
import { cacheBoard as cacheBoardAction, clear as clearAction } from "..";

export const useBoardsCacheDispatcher = () => {
  const dispatch = useDispatch();

  const cacheBoard = (board: BoardWithTasksListsViewModel) => dispatch(cacheBoardAction({ board }));
  const clearCache = () => dispatch(clearAction());

  return { cacheBoard, clearCache };
};
