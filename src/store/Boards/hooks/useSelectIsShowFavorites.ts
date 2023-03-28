import { useSelector } from "store/hooks/useSelector";

export const useSelectIsShowFavorites = () => useSelector((state) => state.BOARDS.isShowFavorites);
