import { useSelector } from "App/store/hooks/useSelector";

export const useSelectBoard = () => useSelector((state) => state.BOARD_PAGE.board);
