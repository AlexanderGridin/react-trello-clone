import { useAppDragLayer } from "App/hooks";
import { DragLayer as DndDragLayer } from "drag-and-drop/components/DragLayer/DragLayer";
import { DraggedItem } from "./DraggedItem";

export const DragLayer = () => {
  const { draggedItem, offset } = useAppDragLayer();

  if (!draggedItem || !offset) {
    return null;
  }

  return (
    <DndDragLayer previewPosition={offset}>
      <DraggedItem item={draggedItem} />
    </DndDragLayer>
  );
};
