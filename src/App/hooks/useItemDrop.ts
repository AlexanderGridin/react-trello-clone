import { useDrop } from "react-dnd";
import { useAppState } from "App/state/hooks/useAppState";
import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";

interface DroppableItem {
  onDrop: (draggedItem: AppDraggedItem) => void;
}

type Item = AppDraggedItem & DroppableItem;

export const useItemDrop = (item: Item) => {
  const { draggedItem } = useAppState();

  const [, drop] = useDrop({
    accept: item.acceptType,
    hover: () => {
      const isDrop = draggedItem && draggedItem.id !== item.id;

      if (!isDrop) {
        return;
      }

      item.onDrop(draggedItem);
    },
  });

  return { drop };
};
