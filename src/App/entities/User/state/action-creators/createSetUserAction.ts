import { Action } from "App/state/models/Action";
import { UserViewModel } from "../../UserViewModel";
import { UserActionType } from "../UserActionType.enum";

interface SetUserPayload {
  user: UserViewModel | null;
}

export type SetUserAction = Action<UserActionType.SetUser, SetUserPayload>;

export const createSetUserAction = (user: UserViewModel | null): SetUserAction => ({
  type: UserActionType.SetUser,
  payload: { user },
});
