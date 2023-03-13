import { createContext, Dispatch } from "react";
import { TAppAction } from "App/state/models/AppAction";
import { AppState } from "../models/AppState";

interface AppStateContextProps extends AppState {
  dispatch: Dispatch<TAppAction>;
}

export const AppStateContext = createContext<AppStateContextProps>({
  ...new AppState(),
  dispatch: () => {},
});
