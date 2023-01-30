import { BoardModel } from "../Board/models/BoardModel";
import { BoardsListDragLayer } from "./components/BoardsListDragLayer";
import { BoardsListContainer } from "./components/BoardsListContainer";
import { BoardsListCell } from "./components/BoardsListCell";
import { AddBoard } from "./components/AddBoard/AddBoard";
import { useBoardsListActions } from "./hooks/useBoardsListActions";
import { BoardsListItems } from "./components/BoardsListItems/BoardsListItems";

interface BoardsListProps {
  boards: BoardModel[];
}

export const BoardsList = ({ boards }: BoardsListProps) => {
  const { addBoard } = useBoardsListActions();

  return (
    <>
      <BoardsListDragLayer />

      <BoardsListContainer>
        <BoardsListItems boards={boards} />

        <BoardsListCell>
          <AddBoard onAdd={addBoard}>+ Add board</AddBoard>
        </BoardsListCell>
      </BoardsListContainer>
    </>
  );
};
