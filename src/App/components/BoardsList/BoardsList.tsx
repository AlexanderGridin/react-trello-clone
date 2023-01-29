import { BoardModel } from "../Board/models/BoardModel";
import { DndCard } from "../DndCard/DndCard";
import { mapBoardToDraggedItem } from "./mappers/mapBoardToDraggedItem";
import { BoardsListDragLayer } from "./components/BoardsListDragLayer";
import { Board } from "../Board/Board";
import { BoardsListContainer } from "./components/BoardsListContainer";
import { BoardsListCell } from "./components/BoardsListCell";
import { useBoardsListActions } from "./hooks/useBoardsListActions";
import { AddBoard } from "./components/AddBoard/AddBoard";

interface BoardsListProps {
  boards: BoardModel[];
}

export const BoardsList = ({ boards }: BoardsListProps) => {
  const { add, remove, dropOnBoard } = useBoardsListActions();
  const minHeight = 150;

  return (
    <>
      <BoardsListDragLayer />

      <BoardsListContainer>
        {boards.length > 0 &&
          boards.map((board: BoardModel) => (
            <BoardsListCell key={board.id}>
              <DndCard
                minHeight={minHeight}
                draggedItem={mapBoardToDraggedItem(board)}
                onDrop={dropOnBoard(board)}
              >
                <Board board={board} onRemove={remove(board)} />
              </DndCard>
            </BoardsListCell>
          ))}

        <BoardsListCell>
          <AddBoard onAdd={add}>+ Add board</AddBoard>
        </BoardsListCell>
      </BoardsListContainer>
    </>
  );
};
