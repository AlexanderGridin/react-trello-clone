import { DndCard } from "App/components/DndCard/DndCard";
import { Card } from "shared/components/Card/Card";
import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { mapBoardToDraggedItem } from "App/entities/Board/mappers/mapBoardToDraggedItem";
import { Board } from "App/widgets/Board/Board";
import style from "../BoardsList.module.css";
import { useNavigate } from "react-router-dom";
import { useBoardDispatchers } from "App/entities/Board/state/hooks/useBoardDispatchers";
import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { DraggedItemType } from "App/enums/DraggedItemType";

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
  const navigate = useNavigate();
  const { dispatchMoveBoard } = useBoardDispatchers();

  const dropOnBoard = (draggedItem: AppDraggedItem) => {
    if (draggedItem.type !== DraggedItemType.Board) {
      return;
    }

    const draggedBoard = draggedItem.data;
    dispatchMoveBoard(draggedBoard, board);
  };

  const navigateToBoard = () => navigate(`/boards/${board.id}`);

  if (isDragPreview) {
    return (
      <div className={style.cell}>
        <Card
          className="drag-preview"
          minHeight={MIN_HEIGHT}
          backgroundColor={BACKGROUD_COLOR}
        >
          <Board board={board} />
        </Card>
      </div>
    );
  }

  return (
    <div className={style.cell} key={board.id}>
      <DndCard
        minHeight={MIN_HEIGHT}
        draggedItem={mapBoardToDraggedItem(board)}
        backgroundColor={BACKGROUD_COLOR}
        onDrop={dropOnBoard}
        onDoubleClick={navigateToBoard}
      >
        <Board board={board} />
      </DndCard>
    </div>
  );
};
