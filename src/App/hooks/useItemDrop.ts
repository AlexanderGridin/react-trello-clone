import { useDrop } from "react-dnd";
import { throttle } from "throttle-debounce";

import { useAppState } from "App/state/hooks/useAppState";
import { TAppDraggedItem } from "App/entities/AppDraggedItem/models";

interface DroppableItem {
  onDrop: (draggedItem: TAppDraggedItem) => void;
}

type TItem = TAppDraggedItem & DroppableItem;

export const useItemDrop = (item: TItem) => {
  const { draggedItem } = useAppState();

  const [, drop] = useDrop({
    accept: item.acceptType,
    hover: throttle(
      100,
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
