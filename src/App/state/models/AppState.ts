import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { BoardViewModel } from "App/entities/Board/Board";
import { BoardWithTasksListsViewModel } from "App/entities/Board/BoardWithTasksLists";
import { UserViewModel } from "App/entities/User/UserViewModel";

export class AppState {
  public readonly boardsCache: Record<string, BoardWithTasksListsViewModel> = {};

  public user: UserViewModel | null = null;
  public boards: BoardViewModel[] | null = null;
  public isShowFavorites = false;
  public draggedItem: AppDraggedItem | null = null;
}
