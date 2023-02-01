import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { useBoardDispatchers } from "App/widgets/Board/state/hooks/useBoardDispatchers";

export const useBoardsListFeatures = () => {
  const { dispatchAddBoard } = useBoardDispatchers();

  const addBoard = (title: string) =>
    dispatchAddBoard(new BoardViewModel({ title }));

  return { addBoard };
};
