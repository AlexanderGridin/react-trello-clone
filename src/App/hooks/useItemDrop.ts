import { useDrop } from "react-dnd";
import { useAppState } from "App/state/hooks/useAppState";
import { AppDraggedItem } from "App/entities/AppDraggedItem/models";
import { throttle } from "throttle-debounce";

interface DroppableItem {
  onDrop: (draggedItem: AppDraggedItem) => void;
}

type Item = AppDraggedItem & DroppableItem;

export const useItemDrop = (item: Item) => {
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
