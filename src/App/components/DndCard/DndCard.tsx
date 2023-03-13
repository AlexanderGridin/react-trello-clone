import { TAppDraggedItem } from "App/entities/AppDraggedItem/models";
import { useItemDrag } from "App/hooks/useItemDrag";
import { useItemDrop } from "App/hooks/useItemDrop";
import { useRef } from "react";
import { Card, CardProps } from "shared/components/Card/Card";

export interface DndCardProps extends CardProps {
  draggedItem: TAppDraggedItem;
  onDrop: (draggedItem: TAppDraggedItem) => void;
}

export const DndCard = ({ draggedItem, onDrop, ...restProps }: DndCardProps) => {
  const { drag, isDragging } = useItemDrag({ ...draggedItem });
  const className = isDragging ? "dragging" : "draggable";

  const { drop } = useItemDrop({
    ...draggedItem,
    onDrop,
  });

  const ref = useRef<HTMLDivElement>(null);
  drag(drop(ref));

  return <Card ref={ref} className={className} {...restProps} />;
};
