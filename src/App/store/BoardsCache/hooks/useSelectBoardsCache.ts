import { useSelector } from "App/store/hooks/useSelector";

export const useSelectBoardsCache = () => useSelector((state) => state.BOARDS_CACHE.data);
