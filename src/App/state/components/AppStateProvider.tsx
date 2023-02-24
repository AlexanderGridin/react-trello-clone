import { useReducer } from "react";
import { INITIAL_STATE } from "App/state/initialState";
import { AppStateContext } from "App/state/components/AppStateContext";
import { appReducer } from "App/state/appReducer";
import { Children } from "shared/models/Children";

interface AppStateProviderProps extends Children {}

export const AppStateProvider = ({ children }: AppStateProviderProps) => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);

  return <AppStateContext.Provider value={{ ...state, dispatch }}>{children}</AppStateContext.Provider>;
};
