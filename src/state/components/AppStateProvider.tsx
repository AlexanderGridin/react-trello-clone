import { ReactNode, useReducer } from "react";
import { INITIAL_STATE } from "state/initialState";
import { AppStateContext } from "state/components/AppStateContext";
import { appReducer } from "state/appReducer";
import { TasksListModel } from "components/TasksList/models/TasksListModel";

interface AppStateProviderProps {
  children?: ReactNode;
}

export const AppStateProvider = ({
  children,
}: AppStateProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);

  const { tasksLists } = state;
  const getTasksByListId = (id: string) =>
    tasksLists.find((list: TasksListModel) => list.id === id)?.tasks ?? [];

  return (
    <AppStateContext.Provider
      value={{ tasksLists, getTasksByListId, dispatch }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
