import { createContext, Dispatch } from "react";
import { TAppAction } from "App/state/types/TAppAction";
import { AppState } from "../models/AppState";

interface IAppStateContextProps extends AppState {
  dispatch: Dispatch<TAppAction>;
}

export const AppStateContext = createContext<IAppStateContextProps>({
  ...new AppState(),
  dispatch: () => {},
});
