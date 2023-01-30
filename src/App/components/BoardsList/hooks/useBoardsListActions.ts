import { BoardModel } from "App/components/Board/models/BoardModel";
import { useBoardDispatchers } from "App/components/Board/state/hooks/useBoardDispatchers";

export const useBoardsListActions = () => {
  const { dispatchAddBoard } = useBoardDispatchers();

  const addBoard = (title: string) =>
    dispatchAddBoard(new BoardModel({ title }));

  return { addBoard };
};
