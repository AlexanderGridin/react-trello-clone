import { useDrag } from "react-dnd";
import { AppDraggedItem } from "App/models/AppDraggedItem";
import { setDraggedItem } from "App/state/actions/setDraggedItem";
import { useAppState } from "App/state/hooks/useAppState";

export const useItemDrag = (item: AppDraggedItem) => {
  const { dispatch } = useAppState();
  const [{ isDragging }, drag] = useDrag({
    type: item.type,
    item: () => {
      dispatch(setDraggedItem(item));
      return item;
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: () => dispatch(setDraggedItem(null)),
  });

  return { drag, isDragging };
};
