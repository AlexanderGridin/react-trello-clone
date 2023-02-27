import { AppState } from "App/state/models/AppState";
import { UserAction } from ".";
import { setUserReducer } from "./reducers/setUserReducer";
import { UserActionType } from "./UserActionType.enum";

export const userReducer = (state: AppState, action: UserAction) => {
  switch (action.type) {
    case UserActionType.SetUser:
      return setUserReducer(state, action);

    default:
      return { ...state };
  }
};
