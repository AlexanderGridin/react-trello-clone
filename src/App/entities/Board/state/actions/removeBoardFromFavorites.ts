import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "App/state/utils/createAction";

interface RemoveBoardFromFavoritesActionPayload {
  board: BoardViewModel;
}

export const removeBoardFromFavorites = (board: BoardViewModel) => {
  const { RemoveBoardFromFavorites } = AppActionType;
  const payload: RemoveBoardFromFavoritesActionPayload = {
    board,
  };

  return createAction<
    typeof RemoveBoardFromFavorites,
    RemoveBoardFromFavoritesActionPayload
  >(RemoveBoardFromFavorites, payload);
};

export type RemoveBoardFromFavoritesAction = ReturnType<
  typeof removeBoardFromFavorites
>;
