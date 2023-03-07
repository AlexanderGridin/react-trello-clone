import { useSelector } from "App/store/hooks/useSelector";

export const useSelectBoardsCache = () => useSelector((state) => state.boardsPage.boardsCache);
