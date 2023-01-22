import { useEffect } from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { AppDraggedItem } from "App/models/AppDraggedItem";
import { useDraggedItemDispatchers } from "App/state/shared/DraggedItem/hooks/useDraggedItemDispatchers";

export const useItemDrag = (item: AppDraggedItem) => {
  const { dispatchSetDraggedItem } = useDraggedItemDispatchers();
  const [{ isDragging }, drag, preview] = useDrag({
    type: item.type,
    item: () => {
      dispatchSetDraggedItem(item);
      return item;
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: () => dispatchSetDraggedItem(null),
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return { drag, isDragging };
};
