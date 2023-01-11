import { createContext, Dispatch } from "react";
import { Task } from "shared/models/Task.model";
import { TasksList } from "shared/models/TasksList.model";
import { AppAction } from "state/models/AppAction.model";

export interface AppStateContextProps {
  tasksLists: Array<TasksList>;
  getTasksByListId: (id: string) => Array<Task>;
  dispatch: Dispatch<AppAction>;
}

const initialValue: AppStateContextProps = {} as AppStateContextProps;

export const AppStateContext =
  createContext<AppStateContextProps>(initialValue);
