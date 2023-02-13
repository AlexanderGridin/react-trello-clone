import { createContext, Dispatch } from "react";
import { AppAction } from "App/state/models/AppAction";
import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { BoardViewModel } from "App/entities/Board/Board";
import { BoardWithTasksListsViewModel } from "App/entities/Board/BoardWithTasksLists";

export interface AppStateContextProps {
  boards: BoardViewModel[] | null;
  boardsCache: Record<string, BoardWithTasksListsViewModel>;
  isShowFavorites: boolean;
  dispatch: Dispatch<AppAction>;
  draggedItem: AppDraggedItem | null;
}

const initialValue: AppStateContextProps = {} as AppStateContextProps;

export const AppStateContext =
  createContext<AppStateContextProps>(initialValue);
