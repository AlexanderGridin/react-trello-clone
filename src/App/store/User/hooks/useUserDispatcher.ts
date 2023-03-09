import { UserViewModel } from "App/entities/User/models";
import { useDispatch } from "App/store/hooks/useDispatch";
import { setUser as setUserAction } from "..";

export const useUserDispatcher = () => {
  const dispatch = useDispatch();

  const setUser = (user: UserViewModel | null) => dispatch(setUserAction({ user }));

  return { setUser };
};
