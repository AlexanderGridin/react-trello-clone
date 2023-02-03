import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { useBoardDispatchers } from "App/entities/Board/state/hooks/useBoardDispatchers";

export const useBoardsListFeatures = () => {
  const { dispatchAddBoard } = useBoardDispatchers();

  const addBoard = (board: BoardViewModel) => dispatchAddBoard(board);

  return { addBoard };
};
