import { useDispatch } from "store/hooks/useDispatch";
import { BoardWithTasksListsViewModel } from "App/entities/Board/models";

import { setBoard as setBoardAction } from "..";

export const useOpenedBoardDispatcher = () => {
  const dispatch = useDispatch();

  const setBoard = (board: BoardWithTasksListsViewModel | null) => dispatch(setBoardAction({ board }));

  return { setBoard };
};
