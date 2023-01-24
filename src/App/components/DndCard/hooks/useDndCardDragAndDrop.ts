import { useItemDrag } from "App/hooks/useItemDrag";
import { useRef } from "react";
import { AppDraggedItem } from "App/models/AppDraggedItem";
import { useItemDrop } from "App/hooks/useItemDrop";
import { DndCardProps } from "../DndCard";

export const useDndCardDragAndDrop = (props: DndCardProps) => {
  const draggedCard: AppDraggedItem = {
    ...props.entity,
  };

  const { drag, isDragging } = useItemDrag({ ...draggedCard });
  const { drop } = useItemDrop({
    ...draggedCard,
    onDrop: props.onDrop,
  });

  const dragAndDropRef = useRef<HTMLDivElement>(null);
  drag(drop(dragAndDropRef));

  return { dragAndDropRef, isDragging };
};
