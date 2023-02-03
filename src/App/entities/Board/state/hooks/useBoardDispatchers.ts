import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { useAppState } from "App/state/hooks/useAppState";
import { addBoard } from "../actions/addBoard";
import { moveBoard } from "../actions/moveBoard";
import { removeBoard } from "../actions/removeBoard";
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

  return {
    dispatchAddBoard,
    dispatchRemoveBoard,
    dispatchMoveBoard,
    dispatchUpdateBoard,
  };
};
