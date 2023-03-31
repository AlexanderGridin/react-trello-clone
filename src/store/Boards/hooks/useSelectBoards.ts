import { useSelector } from "store/hooks/useSelector";

export const useSelectBoards = () => useSelector((state) => state.BOARDS.boards);
