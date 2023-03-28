import { useSelector } from "store/hooks/useSelector";

export const useSelectAppDraggedItem = () => useSelector((state) => state.DRAGGED_ITEM.draggedItem);
