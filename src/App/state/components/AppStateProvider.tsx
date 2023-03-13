import { useReducer } from "react";
import { INITIAL_STATE } from "App/state/initialState";
import { AppStateContext } from "App/state/components/AppStateContext";
import { appReducer } from "App/state/appReducer";
import { IChildren } from "shared/models";

interface AppStateProviderProps extends IChildren {}

export const AppStateProvider = ({ children }: AppStateProviderProps) => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);

  return <AppStateContext.Provider value={{ ...state, dispatch }}>{children}</AppStateContext.Provider>;
};
