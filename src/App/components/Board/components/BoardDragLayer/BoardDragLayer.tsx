import { DragLayer } from "drag-and-drop/components/DragLayer";
import { DragPreviewWrapper } from "drag-and-drop/components/DragPreviewWrapper";
import { BoardCell } from "../BoardCell";
import { useBoardDragLayer } from "./hooks/useBoardDragLayer";
import { renderBoardDraggedItem } from "./utils/renderBoardDraggedItem";

export const BoardDragLayer = () => {
  const { draggedItem, offset } = useBoardDragLayer();

  if (!draggedItem || !offset) {
    return null;
  }

  return (
    <DragLayer>
      <DragPreviewWrapper position={offset}>
        <BoardCell>{renderBoardDraggedItem(draggedItem)}</BoardCell>
      </DragPreviewWrapper>
    </DragLayer>
  );
};
