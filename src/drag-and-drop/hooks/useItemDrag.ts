import { useEffect } from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";

import { useAppDraggedItemDispatcher, useSelectAppDraggedItem } from "store/AppDraggedItem/hooks";
import { TAppDraggedItem } from "App/entities/AppDraggedItem/types";

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
