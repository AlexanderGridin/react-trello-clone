import { useAppState } from "App/state/hooks/useAppState";
import { DragLayer } from "drag-and-drop/components/DragLayer";
import { DragPreviewWrapper } from "drag-and-drop/components/DragPreviewWrapper";
import { useDragLayer } from "react-dnd";
import { BoardCell } from "../BoardCell";
import { renderBoardDraggedItem } from "./utils/renderBoardDraggedItem";

export const BoardDragLayer = () => {
  const { draggedItem } = useAppState();
  const { offset } = useDragLayer((monitor) => ({
    offset: monitor.getSourceClientOffset(),
  }));

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
