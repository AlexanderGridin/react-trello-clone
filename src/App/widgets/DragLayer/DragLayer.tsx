import { DragLayer as DndDragLayer } from "drag-and-drop/components/DragLayer";
import { useAppDragLayer } from "App/hooks";

import { DraggedItem } from "./components";

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
