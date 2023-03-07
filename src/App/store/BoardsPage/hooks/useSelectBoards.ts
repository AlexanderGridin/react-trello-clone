import { useSelector } from "App/store/hooks/useSelector";

export const useSelectBoards = () => useSelector((state) => state.boardsPage.boards);
