import { useDrag } from "react-dnd";
import { useEffect } from "react";
import { getEmptyImage } from "react-dnd-html5-backend";

import { TAppDraggedItem } from "entities/AppDraggedItem/types";
import { useAppDraggedItemDispatcher, useSelectAppDraggedItem } from "store/AppDraggedItem/hooks";

export const useItemDrag = (item: TAppDraggedItem) => {
  const draggedItem = useSelectAppDraggedItem();
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
