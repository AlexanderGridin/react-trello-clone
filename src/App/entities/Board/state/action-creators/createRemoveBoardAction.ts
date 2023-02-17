import { AppActionType } from "App/state/enums/AppActionType.enum";
import { Action } from "App/state/models/Action";
import { BoardViewModel } from "../../Board";

interface RemoveBoardActionPayload {
  board: BoardViewModel;
}

export type RemoveBoardAction = Action<
  AppActionType.RemoveBoard,
  RemoveBoardActionPayload
>;

export const createRemoveBoardAction = (
  board: BoardViewModel
): RemoveBoardAction => ({
  type: AppActionType.RemoveBoard,
  payload: { board },
});
