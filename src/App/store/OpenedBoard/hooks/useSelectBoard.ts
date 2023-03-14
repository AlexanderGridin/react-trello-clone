import { useSelector } from "App/store/hooks/useSelector";

export const useSelectBoard = () => useSelector((state) => state.OPENED_BOARD.board);
