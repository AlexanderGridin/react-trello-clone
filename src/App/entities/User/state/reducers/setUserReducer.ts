import { AppState } from "App/state/models/AppState";
import { SetUserAction } from "../action-creators/createSetUserAction";

export const setUserReducer = (state: AppState, action: SetUserAction): AppState => ({
  ...state,
  user: action.payload.user ? { ...action.payload.user } : null,
});
