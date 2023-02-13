import { useAppState } from "App/state/hooks/useAppState";
import { BoardViewModel } from "../../Board";
import { BoardWithTasksListsViewModel } from "../../BoardWithTasksLists";
import { addBoard } from "../actions/addBoard";
import { cacheBoard } from "../actions/cacheBoard";
import { moveBoard } from "../actions/moveBoard";
import { removeBoard } from "../actions/removeBoard";
import { setBoards } from "../actions/setBoards";
import { setIsShowFavorites } from "../actions/setIsShowFavorites";
import { updateBoard } from "../actions/updateBoard";

export const useBoardDispatchers = () => {
  const { dispatch } = useAppState();

  const dispatchAddBoard = (board: BoardViewModel) => dispatch(addBoard(board));

  const dispatchRemoveBoard = (board: BoardViewModel) =>
    dispatch(removeBoard(board));

  const dispatchMoveBoard = (
    boardToMove: BoardViewModel,
    boardToReplace: BoardViewModel
  ) => dispatch(moveBoard(boardToMove, boardToReplace));

  const dispatchUpdateBoard = (board: BoardViewModel) =>
    dispatch(updateBoard(board));

  const dispatchSetBoards = (boards: BoardViewModel[] | null) =>
    dispatch(setBoards(boards));

  const dispatchCacheBoard = (board: BoardWithTasksListsViewModel) =>
    dispatch(cacheBoard(board));

  const dispatchSetIsShowFavorites = (isShowFavorites: boolean) =>
    dispatch(setIsShowFavorites(isShowFavorites));

  return {
    dispatchAddBoard,
    dispatchRemoveBoard,
    dispatchMoveBoard,
    dispatchUpdateBoard,
    dispatchSetBoards,
    dispatchCacheBoard,
    dispatchSetIsShowFavorites,
  };
};
