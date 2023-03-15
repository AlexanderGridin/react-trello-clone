import { useSelector } from "App/store/hooks/useSelector";

export const useSelectAppDraggedItem = () => useSelector((state) => state.DRAGGED_ITEM.draggedItem);
