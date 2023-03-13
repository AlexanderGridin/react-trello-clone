import { DraggedItemType } from "App/enums/DraggedItemType";

export interface IDraggedItem<T, D> {
  id: string;
  type: T;
  acceptType: DraggedItemType | DraggedItemType[];
  data: D;
}
