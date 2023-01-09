import { ReactNode } from "react";
import { appData } from "mock/appData.mock";
import { TasksList } from "shared/models/TasksList.model";
import { AppStateContext } from "state/AppStateContext";

interface AppStateProviderProps {
  children?: ReactNode;
}

export const AppStateProvider = ({
  children,
}: AppStateProviderProps): JSX.Element => {
  const { tasksLists } = appData;
  const getTasksByListId = (id: string) =>
    tasksLists.find((list: TasksList) => list.id === id)?.tasks ?? [];

  return (
    <AppStateContext.Provider value={{ tasksLists, getTasksByListId }}>
      {children}
    </AppStateContext.Provider>
  );
};
