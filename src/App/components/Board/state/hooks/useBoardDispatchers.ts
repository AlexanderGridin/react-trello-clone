import { useAppState } from "App/state/hooks/useAppState";
import { BoardModel } from "../../models/BoardModel";
import { addBoard } from "../actions/addBoard";
import { moveBoard } from "../actions/moveBoard";
import { removeBoard } from "../actions/removeBoard";

export const useBoardDispatchers = () => {
  const { dispatch } = useAppState();

  const dispatchAddBoard = (board: BoardModel) => dispatch(addBoard(board));

  const dispatchRemoveBoard = (board: BoardModel) =>
    dispatch(removeBoard(board));

  const dispatchMoveBoard = (
    boardToMove: BoardModel,
    boardToReplace: BoardModel
  ) => dispatch(moveBoard(boardToMove, boardToReplace));

  return { dispatchAddBoard, dispatchRemoveBoard, dispatchMoveBoard };
};
