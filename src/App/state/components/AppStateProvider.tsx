import { PropsWithChildren, useReducer } from "react";
import { INITIAL_STATE } from "App/state/initialState";
import { AppStateContext } from "App/state/components/AppStateContext";
import { appReducer } from "App/state/appReducer";

interface AppStateProviderProps extends PropsWithChildren {}

export const AppStateProvider = ({
  children,
}: AppStateProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);

  return (
    <AppStateContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};
