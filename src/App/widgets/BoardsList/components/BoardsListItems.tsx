import { BoardViewModel } from "App/entities/Board/Board";
import { BoardsListItem } from "./BoardsListItem";

interface BoardsListItemsProps {
  boards: BoardViewModel[];
}

export const BoardsListItems = ({ boards }: BoardsListItemsProps) => {
  if (!boards.length) {
    return null;
  }

  return (
    <>
      {boards.map((board: BoardViewModel) => (
        <BoardsListItem board={board} key={board.id} />
      ))}
    </>
  );
};
