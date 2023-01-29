import { useAppDragLayer } from "App/hooks/useAppDragLayer";
import { DragLayer } from "drag-and-drop/components/DragLayer";
import { DragPreviewWrapper } from "drag-and-drop/components/DragPreviewWrapper";
import { BoardCell } from "../BoardCell";
import { renderBoardDraggedItem } from "./utils/renderBoardDraggedItem";

export const BoardDragLayer = () => {
  const { draggedItem, offset } = useAppDragLayer();

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
