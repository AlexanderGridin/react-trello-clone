import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { BoardViewModel } from "App/entities/Board/Board";
import { BoardWithTasksListsViewModel } from "App/entities/Board/BoardWithTasksLists";

export interface AppState {
  boards: BoardViewModel[] | null;
  isShowFavorites: boolean;
  boardsCache: Record<string, BoardWithTasksListsViewModel>;
  draggedItem: AppDraggedItem | null;
}
