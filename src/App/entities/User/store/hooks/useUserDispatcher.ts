import { useDispatch } from "App/store/hooks/useDispatch";
import { setUser as setUserAction } from "..";
import { UserViewModel } from "../../models";

export const useUserDispatcher = () => {
  const dispatch = useDispatch();

  const setUser = (user: UserViewModel | null) => dispatch(setUserAction({ user }));

  return { setUser };
};
