import { useSelector } from "store/hooks/useSelector";

export const useSelectBoard = () => useSelector((state) => state.OPENED_BOARD.board);
