import { useSelector } from "App/store/hooks/useSelector";

export const useSelectUser = () => useSelector((state) => state.user.user);
