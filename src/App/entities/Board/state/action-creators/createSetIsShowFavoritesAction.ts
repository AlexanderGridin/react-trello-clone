import { AppActionType } from "App/state/enums/AppActionType.enum";
import { Action } from "App/state/models/Action";

interface SetIsShowFavoritesActionPayload {
  isShowFavorites: boolean;
}

export type SetIsShowFavoritesAction = Action<
  AppActionType.SetIsShowFavorites,
  SetIsShowFavoritesActionPayload
>;

export const createSetIsShowFavoritesAction = (
  isShowFavorites: boolean
): SetIsShowFavoritesAction => ({
  type: AppActionType.SetIsShowFavorites,
  payload: { isShowFavorites },
});
