import { useDrop } from "react-dnd";
import { throttle } from "throttle-debounce";

import { TAppDraggedItem } from "entities/AppDraggedItem/types";
import { useSelectAppDraggedItem } from "store/AppDraggedItem/hooks";

interface DroppableItem {
  onDrop: (draggedItem: TAppDraggedItem) => void;
}

type TItem = TAppDraggedItem & DroppableItem;

export const useItemDrop = (item: TItem) => {
  const draggedItem = useSelectAppDraggedItem();

  const [, drop] = useDrop({
    accept: item.acceptType,
    hover: throttle(
      150,
      () => {
        const isDrop = draggedItem && draggedItem.id !== item.id;

        if (!isDrop) {
          return;
        }

        item.onDrop(draggedItem);
      },
      { noTrailing: true }
    ),
  });

  return { drop };
};
