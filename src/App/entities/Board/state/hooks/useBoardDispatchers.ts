import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { useAppState } from "App/state/hooks/useAppState";
import { addBoard } from "../actions/addBoard";
import { moveBoard } from "../actions/moveBoard";
import { pushBoardInFavorites } from "../actions/pushBoardInFavorites";
import { removeBoard } from "../actions/removeBoard";
import { removeBoardFromFavorites } from "../actions/removeBoardFromFavorites";
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

  const dispatchPushBoardInFavorites = (board: BoardViewModel) =>
    dispatch(pushBoardInFavorites(board));

  const dispatchRemoveBoardFromFavorites = (board: BoardViewModel) =>
    dispatch(removeBoardFromFavorites(board));

  return {
    dispatchAddBoard,
    dispatchRemoveBoard,
    dispatchMoveBoard,
    dispatchUpdateBoard,
    dispatchPushBoardInFavorites,
    dispatchRemoveBoardFromFavorites,
  };
};
