import { BoardWithTasksListsViewModel } from "App/entities/Board/models";
import { useDispatch } from "App/store/hooks/useDispatch";
import { setBoard as setBoardAction } from "..";

export const useOpenedBoardDispatcher = () => {
  const dispatch = useDispatch();

  const setBoard = (board: BoardWithTasksListsViewModel | null) => dispatch(setBoardAction({ board }));

  return { setBoard };
};
