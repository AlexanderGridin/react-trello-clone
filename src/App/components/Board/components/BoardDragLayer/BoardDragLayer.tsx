import { useAppState } from "App/state/hooks/useAppState";
import { DragLayer } from "drag-and-drop/components/DragLayer";
import { DragPreviewWrapper } from "drag-and-drop/components/DragPreviewWrapper";
import { useDragLayer } from "react-dnd";
import { BoardCell } from "../BoardCell";
import { renderDraggedItem } from "./utils/renderDraggedItem";

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
        <BoardCell>{renderDraggedItem(draggedItem)}</BoardCell>
      </DragPreviewWrapper>
    </DragLayer>
  );
};
