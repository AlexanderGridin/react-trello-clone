import { useDispatch } from "store/hooks/useDispatch";
import { UserViewModel } from "App/entities/User/models";

import { setUser as setUserAction } from "..";

export const useUserDispatcher = () => {
  const dispatch = useDispatch();

  const setUser = (user: UserViewModel | null) => dispatch(setUserAction({ user }));

  return { setUser };
};
