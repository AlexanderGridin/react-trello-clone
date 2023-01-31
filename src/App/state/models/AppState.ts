import { BoardModel } from "App/components/Board/models/BoardModel";
import { AppDraggedItem } from "App/models/AppDraggedItem";

export interface AppState {
  boards: BoardModel[];
  draggedItem: AppDraggedItem | null;
}
