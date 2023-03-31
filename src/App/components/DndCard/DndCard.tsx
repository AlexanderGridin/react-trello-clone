import { Card, ICardProps } from "@alexandergridin/rtc-components-lib";
import { useRef } from "react";

import { useItemDrag, useItemDrop } from "drag-and-drop/hooks";
import { TAppDraggedItem } from "entities/AppDraggedItem/types";

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
