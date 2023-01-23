import { useItemDrag } from "App/hooks/useItemDrag";
import { useRef } from "react";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { AppDraggedItem } from "App/models/AppDraggedItem";
import { useItemDrop } from "App/hooks/useItemDrop";
import { DndCardProps } from "../DndCard";

export const useDndCardDragAndDrop = (card: DndCardProps) => {
  const draggedCard: AppDraggedItem = {
    id: card.id,
    type: DraggedItemType.Card,
    data: { ...card },
  };

  const { drag, isDragging } = useItemDrag({ ...draggedCard });
  const { drop } = useItemDrop({
    ...draggedCard,
    onDrop: (item: AppDraggedItem) => {
      if (item.type === DraggedItemType.Card) {
        console.log(`drop task ${card.id}`);
        item.data.onDrop();
      }
    },
  });

  const dragAndDropRef = useRef<HTMLDivElement>(null);
  drag(drop(dragAndDropRef));

  return { dragAndDropRef, isDragging };
};
