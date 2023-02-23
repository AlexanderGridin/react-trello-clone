import { createContext, Dispatch } from "react";
import { AppAction } from "App/state/models/AppAction";
import { AppState } from "../models/AppState";

interface AppStateContextProps extends AppState {
  dispatch: Dispatch<AppAction>;
}

export const AppStateContext = createContext<AppStateContextProps>({
  ...new AppState(),
  dispatch: () => {},
});
