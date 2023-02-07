import { DndCard } from "App/components/DndCard/DndCard";
import { BoardsListCell } from "../../BoardsListCell";
import { Card } from "shared/components/Card/Card";
import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { mapBoardToDraggedItem } from "App/entities/Board/mappers/mapBoardToDraggedItem";
import { useBoardFeatures } from "App/widgets/Board/hooks/useBoardFeatures";
import { Board } from "App/widgets/Board/Board";

interface BoardsListItemProps {
  board: BoardViewModel;
  isDragPreview?: boolean;
}

const MIN_HEIGHT = 150;
const BACKGROUD_COLOR = "#D8DEE9";

export const BoardsListItem = ({
  board,
  isDragPreview = false,
}: BoardsListItemProps) => {
  const { dropOnBoard, navigateToBoard } = useBoardFeatures(board);

  if (isDragPreview) {
    return (
      <BoardsListCell>
        <Card
          className="drag-preview"
          minHeight={MIN_HEIGHT}
          backgroundColor={BACKGROUD_COLOR}
        >
          <Board board={board} />
        </Card>
      </BoardsListCell>
    );
  }

  return (
    <BoardsListCell key={board.id}>
      <DndCard
        minHeight={MIN_HEIGHT}
        draggedItem={mapBoardToDraggedItem(board)}
        backgroundColor={BACKGROUD_COLOR}
        onDrop={dropOnBoard}
        onDoubleClick={navigateToBoard}
      >
        <Board board={board} />
      </DndCard>
    </BoardsListCell>
  );
};
