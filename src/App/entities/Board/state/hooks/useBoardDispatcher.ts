import { useAppState } from "App/state/hooks/useAppState";
import { BoardViewModel } from "../../Board";
import { BoardWithTasksListsViewModel } from "../../BoardWithTasksLists";
import { createAddBoardAction } from "../actions/createAddBoardAction";
import { createCacheBoardAction } from "../actions/createCacheBoardAction";
import { createMoveBoardAction } from "../actions/createMoveBoardAction";
import { createRemoveBoardAction } from "../actions/createRemoveBoardAction";
import { createSetBoardsAction } from "../actions/createSetBoardsAction";
import { createSetIsShowFavoritesAction } from "../actions/createSetIsShowFavoritesAction";
import { createUpdateBoardAction } from "../actions/createUpdateBoardAction";

export const useBoardDispatcher = () => {
  const { dispatch } = useAppState();

  const addBoard = (board: BoardViewModel) =>
    dispatch(createAddBoardAction(board));

  const removeBoard = (board: BoardViewModel) =>
    dispatch(createRemoveBoardAction(board));

  const moveBoard = (
    boardToMove: BoardViewModel,
    boardToReplace: BoardViewModel
  ) => dispatch(createMoveBoardAction(boardToMove, boardToReplace));

  const updateBoard = (board: BoardViewModel) =>
    dispatch(createUpdateBoardAction(board));

  const setBoards = (boards: BoardViewModel[] | null) =>
    dispatch(createSetBoardsAction(boards));

  const cacheBoard = (board: BoardWithTasksListsViewModel) =>
    dispatch(createCacheBoardAction(board));

  const setIsShowFavorites = (isShowFavorites: boolean) =>
    dispatch(createSetIsShowFavoritesAction(isShowFavorites));

  return {
    addBoard,
    removeBoard,
    moveBoard,
    updateBoard,
    setBoards,
    cacheBoard,
    setIsShowFavorites,
  };
};
