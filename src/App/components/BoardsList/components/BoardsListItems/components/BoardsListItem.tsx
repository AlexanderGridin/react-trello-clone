import { Board } from "App/components/Board/Board";
import { DndCard } from "App/components/DndCard/DndCard";
import { BoardsListCell } from "../../BoardsListCell";
import { useBoardActions } from "App/components/Board/hooks/useBoardActions";
import { Card } from "shared/components/Card/Card";
import { BoardModel } from "App/entities/Board/BoardModel";
import { mapBoardToDraggedItem } from "App/entities/Board/mappers/mapBoardToDraggedItem";

interface BoardsListItemProps {
  board: BoardModel;
  isDragPreview?: boolean;
}

export const BoardsListItem = ({
  board,
  isDragPreview = false,
}: BoardsListItemProps) => {
  const { remove, dropOnBoard, navigateToBoard } = useBoardActions(board);
  const MIN_HEIGHT = 150;

  if (isDragPreview) {
    return (
      <BoardsListCell>
        <Card className="drag-preview" minHeight={150}>
          <Board board={board} onRemove={remove} />
        </Card>
      </BoardsListCell>
    );
  }

  return (
    <BoardsListCell key={board.id}>
      <DndCard
        minHeight={MIN_HEIGHT}
        draggedItem={mapBoardToDraggedItem(board)}
        onDrop={dropOnBoard}
        onDoubleClick={navigateToBoard}
      >
        <Board board={board} onRemove={remove} />
      </DndCard>
    </BoardsListCell>
  );
};