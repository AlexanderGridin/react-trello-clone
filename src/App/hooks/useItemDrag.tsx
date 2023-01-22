import { useDrag } from "react-dnd";
import { AppDraggedItem } from "App/models/AppDraggedItem";
import { useDraggedItemDispatchers } from "App/state/shared/DraggedItem/hooks/useDraggedItemDispatchers";

export const useItemDrag = (item: AppDraggedItem) => {
  const { dispatchSetDraggedItem } = useDraggedItemDispatchers();
  const [{ isDragging }, drag] = useDrag({
    type: item.type,
    item: () => {
      dispatchSetDraggedItem(item);
      return item;
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: () => dispatchSetDraggedItem(null),
  });

  return { drag, isDragging };
};
