import { useDrop } from "react-dnd";
import { AppDraggedItem } from "App/models/AppDraggedItem";
import { useAppState } from "App/state/hooks/useAppState";

type Item = AppDraggedItem & { onDrop: (draggedItem: AppDraggedItem) => void };

export const useItemDrop = (item: Item) => {
  const { draggedItem } = useAppState();
  const [, drop] = useDrop({
    accept: item.type,
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
