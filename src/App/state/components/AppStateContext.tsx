import { createContext, Dispatch } from "react";
import { AppAction } from "App/state/models/AppAction";
import { BoardModel } from "App/entities/Board/BoardModel";
import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";

export interface AppStateContextProps {
  boards: BoardModel[];
  dispatch: Dispatch<AppAction>;
  draggedItem: AppDraggedItem | null;
}

const initialValue: AppStateContextProps = {} as AppStateContextProps;

export const AppStateContext =
  createContext<AppStateContextProps>(initialValue);
