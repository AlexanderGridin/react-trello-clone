import { useContext } from "react";
import { AppStateContext } from "App/state/components/AppStateContext";

export const useAppState = () => useContext(AppStateContext);
