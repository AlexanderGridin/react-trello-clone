import { Board } from "App/components/Board/Board";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { useAppDragLayer } from "App/hooks/useAppDragLayer";
import { DragLayer } from "drag-and-drop/components/DragLayer";
import { DragPreviewWrapper } from "drag-and-drop/components/DragPreviewWrapper";
import { Card } from "shared/components/Card/Card";
import { BoardsListCell } from "./BoardsListCell";

export const BoardsListDragLayer = () => {
  const { draggedItem, offset } = useAppDragLayer();

  if (!draggedItem || !offset || draggedItem.type !== DraggedItemType.Board) {
    return null;
  }

  const draggedBoard = draggedItem.data;

  return (
    <DragLayer>
      <DragPreviewWrapper position={offset}>
        <BoardsListCell>
          <Card className="drag-preview" minHeight={150}>
            <Board board={draggedBoard} onRemove={() => {}} />
          </Card>
        </BoardsListCell>
      </DragPreviewWrapper>
    </DragLayer>
  );
};
