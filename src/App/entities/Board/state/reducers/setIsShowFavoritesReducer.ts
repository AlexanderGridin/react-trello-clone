import { AppState } from "App/state/models/AppState";
import { SetIsShowFavoritesAction } from "../actions/setIsShowFavorites";

export const setIsShowFavoritesReducer = (
  state: AppState,
  action: SetIsShowFavoritesAction
): AppState => {
  return {
    ...state,
    isShowFavorites: action.payload.isShowFavorites,
  };
};