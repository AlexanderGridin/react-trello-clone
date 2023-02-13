import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "App/state/utils/createAction";

interface SetIsShowFavoritesActionPayload {
  isShowFavorites: boolean;
}

export const setIsShowFavorites = (isShowFavorites: boolean) => {
  const { SetIsShowFavorites } = AppActionType;
  const payload: SetIsShowFavoritesActionPayload = {
    isShowFavorites,
  };

  return createAction<
    typeof SetIsShowFavorites,
    SetIsShowFavoritesActionPayload
  >(SetIsShowFavorites, payload);
};

export type SetIsShowFavoritesAction = ReturnType<typeof setIsShowFavorites>;
