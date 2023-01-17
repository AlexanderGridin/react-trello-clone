import { TasksListModel } from "components/TasksList/models/TasksListModel";
import { createContext, Dispatch } from "react";
import { Task } from "shared/models/Task";
import { AppAction } from "state/models/AppAction";

export interface AppStateContextProps {
  tasksLists: Array<TasksListModel>;
  getTasksByListId: (id: string) => Array<Task>;
  dispatch: Dispatch<AppAction>;
}

const initialValue: AppStateContextProps = {} as AppStateContextProps;

export const AppStateContext =
  createContext<AppStateContextProps>(initialValue);
