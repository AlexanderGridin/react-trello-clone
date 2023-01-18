import { TasksListModel } from "App/components/Board/components/TasksList/models/TasksListModel";
import { createContext, Dispatch } from "react";
import { AppAction } from "App/state/models/AppAction";

export interface AppStateContextProps {
  tasksLists: Array<TasksListModel>;
  dispatch: Dispatch<AppAction>;
}

const initialValue: AppStateContextProps = {} as AppStateContextProps;

export const AppStateContext =
  createContext<AppStateContextProps>(initialValue);
