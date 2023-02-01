import { useBoardDispatchers } from "App/components/Board/state/hooks/useBoardDispatchers";
import { BoardModel } from "App/entities/Board/BoardModel";

export const useBoardsListFeatures = () => {
  const { dispatchAddBoard } = useBoardDispatchers();

  const addBoard = (title: string) =>
    dispatchAddBoard(new BoardModel({ title }));

  return { addBoard };
};
