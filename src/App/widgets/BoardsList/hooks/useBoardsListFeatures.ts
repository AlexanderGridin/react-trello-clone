import { BoardModel } from "App/entities/Board/BoardModel";
import { useBoardDispatchers } from "App/widgets/Board/state/hooks/useBoardDispatchers";

export const useBoardsListFeatures = () => {
  const { dispatchAddBoard } = useBoardDispatchers();

  const addBoard = (title: string) =>
    dispatchAddBoard(new BoardModel({ title }));

  return { addBoard };
};
