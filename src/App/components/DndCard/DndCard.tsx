import { Card, CardProps } from "shared/components/Card/Card";
import { useDndCardActions } from "./hooks/useDndCardActions";
import { useDndCardDragAndDrop } from "./hooks/useDndCardDragAndDrop";

export interface DndCardProps extends CardProps {
  id: string;
  onDrop: () => void;
}

export const DndCard = (props: DndCardProps) => {
  const { children } = props;
  const { remove } = useDndCardActions(props);
  const { dragAndDropRef } = useDndCardDragAndDrop(props);

  return (
    <Card ref={dragAndDropRef} onRemove={remove}>
      {children}
    </Card>
  );
};
