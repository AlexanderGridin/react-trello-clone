import { useAppDragLayer } from "App/hooks/useAppDragLayer";
import { DragLayer } from "drag-and-drop/components/DragLayer";
import { DragPreviewWrapper } from "drag-and-drop/components/DragPreviewWrapper";
import { BoardPageCell } from "./BoardPageCell";
import { BoardPageDraggedItem } from "./BoardPageDraggedItem";

export const BoardPageDragLayer = () => {
  const { draggedItem, offset } = useAppDragLayer();

  if (!draggedItem || !offset) {
    return null;
  }

  return (
    <DragLayer>
      <DragPreviewWrapper position={offset}>
        <BoardPageCell>
          <BoardPageDraggedItem item={draggedItem} />
        </BoardPageCell>
      </DragPreviewWrapper>
    </DragLayer>
  );
};
