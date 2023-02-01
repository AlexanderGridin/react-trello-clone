import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { BoardViewModel } from "App/entities/Board/BoardViewModel";

export interface AppState {
  boards: BoardViewModel[];
  draggedItem: AppDraggedItem | null;
}
