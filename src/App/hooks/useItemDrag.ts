import { useEffect } from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { useAppState } from "App/state/hooks/useAppState";
import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { useAppDraggedItemDispatchers } from "App/entities/AppDraggedItem/state/hooks/useAppDraggedItemDispatchers";

export const useItemDrag = (item: AppDraggedItem) => {
  const { draggedItem } = useAppState();
  const isDragging = draggedItem?.id === item.id;

  const { dispatchSetAppDraggedItem } = useAppDraggedItemDispatchers();

  const [, drag, preview] = useDrag({
    type: item.type,
    item: () => {
      dispatchSetAppDraggedItem(item);
      return item;
    },
    end: () => dispatchSetAppDraggedItem(null),
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return { drag, isDragging };
};
