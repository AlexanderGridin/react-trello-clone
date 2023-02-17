import { useAppState } from "App/state/hooks/useAppState";
import { BoardAction } from "..";
import { BoardViewModel } from "../../Board";
import { BoardWithTasksListsViewModel } from "../../BoardWithTasksLists";
import { createAddBoardAction } from "../action-creators/createAddBoardAction";
import { createCacheBoardAction } from "../action-creators/createCacheBoardAction";
import { createMoveBoardAction } from "../action-creators/createMoveBoardAction";
import { createRemoveBoardAction } from "../action-creators/createRemoveBoardAction";
import { createSetBoardsAction } from "../action-creators/createSetBoardsAction";
import { createSetIsShowFavoritesAction } from "../action-creators/createSetIsShowFavoritesAction";
import { createUpdateBoardAction } from "../action-creators/createUpdateBoardAction";

export const useBoardDispatcher = () => {
  const { dispatch } = useAppState();

  const dispatchForModule = (action: BoardAction) =>
    dispatch({
      module: "Board",
      ...action,
    });

  const addBoard = (board: BoardViewModel) =>
    dispatchForModule(createAddBoardAction(board));

  const removeBoard = (board: BoardViewModel) =>
    dispatchForModule(createRemoveBoardAction(board));

  const moveBoard = (
    boardToMove: BoardViewModel,
    boardToReplace: BoardViewModel
  ) => dispatchForModule(createMoveBoardAction(boardToMove, boardToReplace));

  const updateBoard = (board: BoardViewModel) =>
    dispatchForModule(createUpdateBoardAction(board));

  const setBoards = (boards: BoardViewModel[] | null) =>
    dispatchForModule(createSetBoardsAction(boards));

  const cacheBoard = (board: BoardWithTasksListsViewModel) =>
    dispatchForModule(createCacheBoardAction(board));

  const setIsShowFavorites = (isShowFavorites: boolean) =>
    dispatchForModule(createSetIsShowFavoritesAction(isShowFavorites));

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
