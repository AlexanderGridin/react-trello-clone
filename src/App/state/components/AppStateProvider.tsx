import { ReactNode, useReducer } from "react";
import { INITIAL_STATE } from "App/state/initialState";
import { AppStateContext } from "App/state/components/AppStateContext";
import { appReducer } from "App/state/appReducer";

interface AppStateProviderProps {
  children?: ReactNode;
}

export const AppStateProvider = ({
  children,
}: AppStateProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);
  const { tasksLists, draggedItem } = state;

  return (
    <AppStateContext.Provider value={{ tasksLists, draggedItem, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};
