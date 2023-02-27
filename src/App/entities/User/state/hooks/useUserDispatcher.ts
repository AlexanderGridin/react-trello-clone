import { useAppState } from "App/state/hooks/useAppState";
import { UserAction } from "..";
import { UserViewModel } from "../../UserViewModel";
import { createSetUserAction } from "../action-creators/createSetUserAction";

export const useUserDispatcher = () => {
  const { dispatch } = useAppState();
  const dispatchForModule = (action: UserAction) =>
    dispatch({
      module: "User",
      ...action,
    });

  const setUser = (user: UserViewModel | null) => dispatchForModule(createSetUserAction(user));

  return { setUser };
};
