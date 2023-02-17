import { AppActionType } from "App/state/enums/AppActionType.enum";
import { Action } from "App/state/models/Action";
import { BoardViewModel } from "../../Board";

interface UpdateBoardActionPayload {
  board: BoardViewModel;
}

export type UpdateBoardAction = Action<
  AppActionType.UpdateBoard,
  UpdateBoardActionPayload
>;

export const createUpdateBoardAction = (
  board: BoardViewModel
): UpdateBoardAction => ({
  type: AppActionType.UpdateBoard,
  payload: { board },
});
