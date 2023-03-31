import { useSelector } from "store/hooks/useSelector";

export const useSelectUser = () => useSelector((state) => state.USER.user);
