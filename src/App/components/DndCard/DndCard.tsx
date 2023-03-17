import { useRef } from "react";

import { Card, ICardProps } from "shared/components/Card";
import { useItemDrag, useItemDrop } from "App/hooks";
import { TAppDraggedItem } from "App/entities/AppDraggedItem/types";

export interface IDndCardProps extends ICardProps {
  draggedItem: TAppDraggedItem;
  onDrop: (draggedItem: TAppDraggedItem) => void;
}

export const DndCard = ({ draggedItem, onDrop, ...restProps }: IDndCardProps) => {
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
