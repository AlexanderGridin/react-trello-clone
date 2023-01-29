import { useAppState } from "App/state/hooks/useAppState";
import { useDragLayer } from "react-dnd";

export const useAppDragLayer = () => {
  const { draggedItem } = useAppState();
  const { offset } = useDragLayer((monitor) => ({
    offset: monitor.getSourceClientOffset(),
  }));

  return { draggedItem, offset };
};
