import { DraggedItemType } from "App/enums/DraggedItemType";
import { useAppDragLayer } from "App/hooks/useAppDragLayer";
import { DragLayer } from "drag-and-drop/components/DragLayer";
import { DragPreviewWrapper } from "drag-and-drop/components/DragPreviewWrapper";
import { BoardsListItem } from "./BoardsListItems/components/BoardsListItem";

export const BoardsListDragLayer = () => {
  const { draggedItem, offset } = useAppDragLayer();

  if (!draggedItem || !offset || draggedItem.type !== DraggedItemType.Board) {
    return null;
  }

  const draggedBoard = draggedItem.data;

  return (
    <DragLayer>
      <DragPreviewWrapper position={offset}>
        <BoardsListItem board={draggedBoard} isDragPreview />
      </DragPreviewWrapper>
    </DragLayer>
  );
};
