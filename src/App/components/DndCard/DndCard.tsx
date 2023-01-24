import { AppDraggedItem } from "App/models/AppDraggedItem";
import { Card, CardProps } from "shared/components/Card/Card";
import { useDndCardDragAndDrop } from "./hooks/useDndCardDragAndDrop";

export interface DndCardProps extends CardProps {
  entity: AppDraggedItem;
  onDrop: (draggedItem: AppDraggedItem) => void;
}

export const DndCard = (props: DndCardProps) => {
  const { header, footer, backgroundColor, children } = props;
  const { dragAndDropRef, isDragging } = useDndCardDragAndDrop(props);

  const className = isDragging() ? "dragging" : "";

  return (
    <Card
      ref={dragAndDropRef}
      header={header}
      footer={footer}
      backgroundColor={backgroundColor}
      className={className}
    >
      {children}
    </Card>
  );
};
