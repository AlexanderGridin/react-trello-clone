import { AddBoardAction } from "App/entities/Board/state/action-creators/createAddBoardAction";
import { CacheBoardAction } from "App/entities/Board/state/action-creators/createCacheBoardAction";
import { MoveBoardAction } from "App/entities/Board/state/action-creators/createMoveBoardAction";
import { RemoveBoardAction } from "App/entities/Board/state/action-creators/createRemoveBoardAction";
import { SetBoardsAction } from "App/entities/Board/state/action-creators/createSetBoardsAction";
import { SetIsShowFavoritesAction } from "App/entities/Board/state/action-creators/createSetIsShowFavoritesAction";
import { UpdateBoardAction } from "App/entities/Board/state/action-creators/createUpdateBoardAction";

export * from "./hooks/useBoardDispatcher";
export * from "./boardReducer";

export type BoardAction =
  | CacheBoardAction
  | AddBoardAction
  | UpdateBoardAction
  | RemoveBoardAction
  | SetBoardsAction
  | SetIsShowFavoritesAction
  | MoveBoardAction;

export type BoardModuleAction = { module: "Board" } & BoardAction;
