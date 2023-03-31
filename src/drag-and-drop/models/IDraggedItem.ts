import { DraggedItemType } from "drag-and-drop/enums";

export interface IDraggedItem<T, D> {
  id: string;
  type: T;
  acceptType: DraggedItemType | DraggedItemType[];
  data: D;
}
