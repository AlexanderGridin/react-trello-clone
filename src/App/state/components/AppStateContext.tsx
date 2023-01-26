import { createContext, Dispatch } from "react";
import { AppAction } from "App/state/models/AppAction";
import { AppDraggedItem } from "App/models/AppDraggedItem";
import { TasksListModel } from "App/components/TasksList/models/TasksListModel";

export interface AppStateContextProps {
  tasksLists: TasksListModel[];
  dispatch: Dispatch<AppAction>;
  draggedItem: AppDraggedItem | null;
}

const initialValue: AppStateContextProps = {} as AppStateContextProps;

export const AppStateContext =
  createContext<AppStateContextProps>(initialValue);
