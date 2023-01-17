import { useContext } from "react";
import { AppStateContext } from "state/components/AppStateContext";

export const useAppState = () => useContext(AppStateContext);
