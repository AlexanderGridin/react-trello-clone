import { useDispatch } from "App/store/hooks/useDispatch";
import {
  addBoard as addBoardAction,
  removeBoard as removeBoardAction,
  updateBoard as updateBoardAction,
  setBoards as setBoardsAction,
  cacheBoard as cacheBoardAction,
  clearBoardsCache as clearBoardsCacheAction,
  moveBoard as moveBoardAction,
  setIsShowFavorites as setIsShowFavoritesAction,
} from "..";
import { BoardViewModel, BoardWithTasksListsViewModel } from "../../models";

export const useBoardDispatcher = () => {
  const dispatch = useDispatch();

  const addBoard = (board: BoardViewModel) => dispatch(addBoardAction({ board }));
  const removeBoard = (board: BoardViewModel) => dispatch(removeBoardAction({ board }));
  const updateBoard = (board: BoardViewModel) => dispatch(updateBoardAction({ board }));
  const setBoards = (boards: BoardViewModel[] | null) => dispatch(setBoardsAction({ boards }));
  const cacheBoard = (board: BoardWithTasksListsViewModel) => dispatch(cacheBoardAction({ board }));
  const clearBoardsCache = () => dispatch(clearBoardsCacheAction());

  const moveBoard = (boardToMove: BoardViewModel, boardToReplace: BoardViewModel) =>
    dispatch(moveBoardAction({ boardToMove, boardToReplace }));

  const setIsShowFavorites = (isShowFavorites: boolean) => dispatch(setIsShowFavoritesAction({ isShowFavorites }));

  return {
    addBoard,
    removeBoard,
    moveBoard,
    updateBoard,
    setBoards,
    cacheBoard,
    clearBoardsCache,
    setIsShowFavorites,
  };
};
