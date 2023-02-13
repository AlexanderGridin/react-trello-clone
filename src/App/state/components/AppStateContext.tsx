import { createContext, Dispatch } from "react";
import { AppAction } from "App/state/models/AppAction";
import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";

export interface AppStateContextProps {
  boards: BoardViewModel[] | null;
  boardsCache: Record<string, BoardViewModel>;
  dispatch: Dispatch<AppAction>;
  draggedItem: AppDraggedItem | null;
}

const initialValue: AppStateContextProps = {} as AppStateContextProps;

export const AppStateContext =
  createContext<AppStateContextProps>(initialValue);
