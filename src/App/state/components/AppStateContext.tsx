import { createContext, Dispatch } from "react";
import { AppAction } from "App/state/models/AppAction";
import { AppDraggedItem } from "App/models/AppDraggedItem";
import { BoardModel } from "App/entities/Board/BoardModel";

export interface AppStateContextProps {
  boards: BoardModel[];
  dispatch: Dispatch<AppAction>;
  draggedItem: AppDraggedItem | null;
}

const initialValue: AppStateContextProps = {} as AppStateContextProps;

export const AppStateContext =
  createContext<AppStateContextProps>(initialValue);
