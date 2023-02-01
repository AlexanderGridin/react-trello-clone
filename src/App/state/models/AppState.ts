import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { BoardModel } from "App/entities/Board/BoardModel";

export interface AppState {
  boards: BoardModel[];
  draggedItem: AppDraggedItem | null;
}
