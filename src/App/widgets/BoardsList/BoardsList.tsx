import { BoardsListDragLayer } from "./components/BoardsListDragLayer";
import { BoardsListContainer } from "./components/BoardsListContainer";
import { BoardsListCell } from "./components/BoardsListCell";
import { AddBoard } from "./components/AddBoard/AddBoard";
import { BoardsListItems } from "./components/BoardsListItems/BoardsListItems";
import { BoardModel } from "App/entities/Board/BoardModel";
import { useBoardsListFeatures } from "./hooks/useBoardsListFeatures";

interface BoardsListProps {
  boards: BoardModel[];
}

export const BoardsList = ({ boards }: BoardsListProps) => {
  const { addBoard } = useBoardsListFeatures();

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
