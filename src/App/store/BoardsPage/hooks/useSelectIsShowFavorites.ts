import { useSelector } from "App/store/hooks/useSelector";

export const useSelectIsShowFavorites = () => useSelector((state) => state.BOARDS_PAGE.isShowFavorites);
