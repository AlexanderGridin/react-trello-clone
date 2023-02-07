import { useDragLayer } from "react-dnd";
import { useAppState } from "App/state/hooks/useAppState";

export const useAppDragLayer = () => {
  const { draggedItem } = useAppState();

  const { offset } = useDragLayer((monitor) => ({
    offset: monitor.getSourceClientOffset(),
  }));

  return { draggedItem, offset };
};
