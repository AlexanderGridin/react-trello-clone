import { ReactNode, useReducer } from "react";
import { INITIAL_STATE } from "state/initialState";
import { TasksList } from "shared/models/TasksList.model";
import { AppStateContext } from "state/components/AppStateContext";
import { appReducer } from "state/appReducer";

interface AppStateProviderProps {
  children?: ReactNode;
}

export const AppStateProvider = ({
  children,
}: AppStateProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);

  const { tasksLists } = state;
  const getTasksByListId = (id: string) =>
    tasksLists.find((list: TasksList) => list.id === id)?.tasks ?? [];

  return (
    <AppStateContext.Provider
      value={{ tasksLists, getTasksByListId, dispatch }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
