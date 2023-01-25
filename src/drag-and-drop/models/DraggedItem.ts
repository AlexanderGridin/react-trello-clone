import { DraggedItemType } from "App/enums/DraggedItemType";

export interface DraggedItem<T, D> {
  id: string;
  type: T;
  acceptType: DraggedItemType | DraggedItemType[];
  data: D;
}
