import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { BoardViewModel } from "App/entities/Board/Board";
import { BoardWithTasksListsViewModel } from "App/entities/Board/BoardWithTasksLists";

export class AppState {
	public readonly boardsCache: Record<string, BoardWithTasksListsViewModel> = {};

  public boards: BoardViewModel[] | null = null;
  public isShowFavorites = false;
  public draggedItem: AppDraggedItem | null = null;
}
