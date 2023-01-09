import { createContext } from "react";
import { Task } from "shared/models/Task.model";
import { TasksList } from "shared/models/TasksList.model";

export interface AppStateContextProps {
  tasksLists: Array<TasksList>;
  getTasksByListId: (id: string) => Array<Task>;
}

const initialValue: AppStateContextProps = {} as AppStateContextProps;

export const AppStateContext =
  createContext<AppStateContextProps>(initialValue);
