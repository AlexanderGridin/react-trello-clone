import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "App/state/utils/createAction";

interface PushBoardInFavoritesActionPayload {
  board: BoardViewModel;
}

export const pushBoardInFavorites = (board: BoardViewModel) => {
  const { PushBoardInFavorites } = AppActionType;
  const payload: PushBoardInFavoritesActionPayload = {
    board,
  };

  return createAction<
    typeof PushBoardInFavorites,
    PushBoardInFavoritesActionPayload
  >(PushBoardInFavorites, payload);
};

export type PushBoardInFavoritesAction = ReturnType<
  typeof pushBoardInFavorites
>;
