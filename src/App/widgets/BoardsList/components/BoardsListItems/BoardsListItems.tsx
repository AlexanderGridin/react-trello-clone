import { BoardModel } from "App/entities/Board/BoardModel";
import { BoardsListItem } from "./components/BoardsListItem";

interface BoardsListItemsProps {
  boards: BoardModel[];
}

export const BoardsListItems = ({ boards }: BoardsListItemsProps) => {
  if (!boards.length) {
    return null;
  }

  return (
    <>
      {boards.map((board: BoardModel) => (
        <BoardsListItem board={board} key={board.id} />
      ))}
    </>
  );
};
