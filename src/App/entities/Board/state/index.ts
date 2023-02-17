import { AddBoardAction } from "App/entities/Board/state/action-creators/createAddBoardAction";
import { CacheBoardAction } from "App/entities/Board/state/action-creators/createCacheBoardAction";
import { MoveBoardAction } from "App/entities/Board/state/action-creators/createMoveBoardAction";
import { RemoveBoardAction } from "App/entities/Board/state/action-creators/createRemoveBoardAction";
import { SetBoardsAction } from "App/entities/Board/state/action-creators/createSetBoardsAction";
import { SetIsShowFavoritesAction } from "App/entities/Board/state/action-creators/createSetIsShowFavoritesAction";
import { UpdateBoardAction } from "App/entities/Board/state/action-creators/createUpdateBoardAction";
import { AppActionType } from "App/state/enums/AppActionType.enum";
import { AppAction } from "App/state/models/AppAction";
import { AppState } from "App/state/models/AppState";
import { addBoardReducer } from "./reducers/addBoardReducer";
import { cacheBoardReducer } from "./reducers/cacheBoardReducer";
import { moveBoardReducer } from "./reducers/moveBoardReducer";
import { removeBoardReducer } from "./reducers/removeBoardReducer";
import { setBoardsReducer } from "./reducers/setBoardsReducer";
import { setIsShowFavoritesReducer } from "./reducers/setIsShowFavoritesReducer";
import { updateBoardReducer } from "./reducers/updateBoardReducer";

export * from "./hooks/useBoardDispatcher";

export type BoardAction =
  | CacheBoardAction
  | AddBoardAction
  | UpdateBoardAction
  | RemoveBoardAction
  | SetBoardsAction
  | SetIsShowFavoritesAction
  | MoveBoardAction;

export type BoardModuleAction = { module: "Board" } & BoardAction;

export const boardReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case AppActionType.AddBoard:
      return addBoardReducer(state, action);

    case AppActionType.UpdateBoard:
      return updateBoardReducer(state, action);

    case AppActionType.RemoveBoard:
      return removeBoardReducer(state, action);

    case AppActionType.MoveBoard:
      return moveBoardReducer(state, action);

    case AppActionType.SetBoards:
      return setBoardsReducer(state, action);

    case AppActionType.CacheBoard:
      return cacheBoardReducer(state, action);

    case AppActionType.SetIsShowFavorites:
      return setIsShowFavoritesReducer(state, action);

    default:
      return { ...state };
  }
};
