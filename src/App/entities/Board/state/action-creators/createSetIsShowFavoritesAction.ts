import { Action } from "App/state/models/Action";
import { BoardActionType } from "../BoardActionType.enum";

interface SetIsShowFavoritesActionPayload {
  isShowFavorites: boolean;
}

export type SetIsShowFavoritesAction = Action<BoardActionType.SetIsShowFavorites, SetIsShowFavoritesActionPayload>;

export const createSetIsShowFavoritesAction = (isShowFavorites: boolean): SetIsShowFavoritesAction => ({
  type: BoardActionType.SetIsShowFavorites,
  payload: { isShowFavorites },
});
