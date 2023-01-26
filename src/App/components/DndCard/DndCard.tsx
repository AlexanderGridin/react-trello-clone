import { AppDraggedItem } from "App/models/AppDraggedItem";
import { Card, CardProps } from "shared/components/Card/Card";
import { useDndCardDragAndDrop } from "./hooks/useDndCardDragAndDrop";

export interface DndCardProps extends CardProps {
  draggedItem: AppDraggedItem;
  onDrop: (draggedItem: AppDraggedItem) => void;
}

export const DndCard = (props: DndCardProps) => {
  const { dragAndDropRef, draggingClassName } = useDndCardDragAndDrop(props);
  return <Card ref={dragAndDropRef} className={draggingClassName} {...props} />;
};
