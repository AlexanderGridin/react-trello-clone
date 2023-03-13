import { useEffect } from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { useAppState } from "App/state/hooks/useAppState";
import { useAppDraggedItemDispatcher } from "App/entities/AppDraggedItem/state";
import { TAppDraggedItem } from "App/entities/AppDraggedItem/models";

export const useItemDrag = (item: TAppDraggedItem) => {
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
