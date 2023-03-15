import { useDragLayer } from "react-dnd";

import { useSelectAppDraggedItem } from "App/store/AppDraggedItem/hooks";

export const useAppDragLayer = () => {
  const draggedItem = useSelectAppDraggedItem();

  const { offset } = useDragLayer((monitor) => ({
    offset: monitor.getSourceClientOffset(),
  }));

  return { draggedItem, offset };
};
