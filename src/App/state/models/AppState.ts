import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { BoardViewModel } from "App/entities/Board/BoardViewModel";

export interface AppState {
  boards: BoardViewModel[] | null;
  boardsCache: Record<string, BoardViewModel>;
  draggedItem: AppDraggedItem | null;
}
