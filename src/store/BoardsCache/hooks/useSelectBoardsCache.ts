import { useSelector } from "store/hooks/useSelector";

export const useSelectBoardsCache = () => useSelector((state) => state.BOARDS_CACHE.data);
