import { useEffect } from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { useDraggedItemDispatchers } from "App/state/shared/DraggedItem/hooks/useDraggedItemDispatchers";
import { useAppState } from "App/state/hooks/useAppState";
import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";

export const useItemDrag = (item: AppDraggedItem) => {
  const { draggedItem } = useAppState();
  const isDragging = draggedItem?.id === item.id;

  const { dispatchSetDraggedItem } = useDraggedItemDispatchers();

  const [, drag, preview] = useDrag({
    type: item.type,
    item: () => {
      dispatchSetDraggedItem(item);
      return item;
    },
    end: () => dispatchSetDraggedItem(null),
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return { drag, isDragging };
};
