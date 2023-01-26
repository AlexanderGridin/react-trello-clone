import { useItemDrag } from "App/hooks/useItemDrag";
import { useRef } from "react";
import { useItemDrop } from "App/hooks/useItemDrop";
import { DndCardProps } from "../DndCard";

export const useDndCardDragAndDrop = (props: DndCardProps) => {
  const { draggedItem, onDrop } = props;

  const { drag, isDragging } = useItemDrag({ ...draggedItem });
  const draggingClassName = isDragging ? "dragging" : "";

  const { drop } = useItemDrop({
    ...draggedItem,
    onDrop,
  });

  const dragAndDropRef = useRef<HTMLDivElement>(null);
  drag(drop(dragAndDropRef));

  return { dragAndDropRef, draggingClassName };
};
