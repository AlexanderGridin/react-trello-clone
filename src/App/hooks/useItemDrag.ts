import { useEffect } from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { useAppState } from "App/state/hooks/useAppState";
import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { useAppDraggedItemDispatcher } from "App/entities/AppDraggedItem/state";

export const useItemDrag = (item: AppDraggedItem) => {
  const { draggedItem } = useAppState();
  const isDragging = draggedItem?.id === item.id;

  const dispatcher = useAppDraggedItemDispatcher();

  const [, drag, preview] = useDrag({
    type: item.type,
    item: () => {
      dispatcher.setAppDraggedItem(item);
      return item;
    },
    end: () => dispatcher.setAppDraggedItem(null),
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return { drag, isDragging };
};
