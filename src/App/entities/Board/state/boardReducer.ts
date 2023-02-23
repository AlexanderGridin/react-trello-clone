import { AppAction } from "App/state/models/AppAction";
import { AppState } from "App/state/models/AppState";
import { BoardActionType } from "./BoardActionType.enum";
import { addBoardReducer } from "./reducers/addBoardReducer";
import { cacheBoardReducer } from "./reducers/cacheBoardReducer";
import { moveBoardReducer } from "./reducers/moveBoardReducer";
import { removeBoardReducer } from "./reducers/removeBoardReducer";
import { setBoardsReducer } from "./reducers/setBoardsReducer";
import { setIsShowFavoritesReducer } from "./reducers/setIsShowFavoritesReducer";
import { updateBoardReducer } from "./reducers/updateBoardReducer";

export const boardReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case BoardActionType.AddBoard:
      return addBoardReducer(state, action);

    case BoardActionType.UpdateBoard:
      return updateBoardReducer(state, action);

    case BoardActionType.RemoveBoard:
      return removeBoardReducer(state, action);

    case BoardActionType.MoveBoard:
      return moveBoardReducer(state, action);

    case BoardActionType.SetBoards:
      return setBoardsReducer(state, action);

    case BoardActionType.CacheBoard:
      return cacheBoardReducer(state, action);

    case BoardActionType.SetIsShowFavorites:
      return setIsShowFavoritesReducer(state, action);

    default:
      return { ...state };
  }
};

