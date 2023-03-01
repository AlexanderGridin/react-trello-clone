import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { BoardViewModel } from "App/entities/Board/models";
import { BoardWithTasksListsViewModel } from "App/entities/Board/models";
import { UserViewModel } from "App/entities/User/models";

export class AppState {
  public readonly boardsCache: Record<string, BoardWithTasksListsViewModel> = {};

  public user: UserViewModel | null = null;

  public boards: BoardViewModel[] | null = null;
  public isShowFavorites = false;
  public draggedItem: AppDraggedItem | null = null;
}
