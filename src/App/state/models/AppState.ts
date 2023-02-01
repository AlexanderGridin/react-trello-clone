import { BoardModel } from "App/entities/Board/BoardModel";
import { AppDraggedItem } from "App/models/AppDraggedItem";

export interface AppState {
  boards: BoardModel[];
  draggedItem: AppDraggedItem | null;
}
