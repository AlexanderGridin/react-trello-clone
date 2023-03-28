import { useDragLayer } from "react-dnd";

import { useSelectAppDraggedItem } from "store/AppDraggedItem/hooks";

export const useAppDragLayer = () => {
  const draggedItem = useSelectAppDraggedItem();

  const { offset } = useDragLayer((monitor) => ({
    offset: monitor.getSourceClientOffset(),
  }));

  return { draggedItem, offset };
};
