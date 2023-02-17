import { AppActionType } from "App/state/enums/AppActionType.enum";
import { Action } from "App/state/models/Action";
import { BoardViewModel } from "../../Board";

interface AddBoardActionPayload {
  board: BoardViewModel;
}

export type AddBoardAction = Action<
  AppActionType.AddBoard,
  AddBoardActionPayload
>;

export const createAddBoardAction = (
  board: BoardViewModel
): AddBoardAction => ({
  type: AppActionType.AddBoard,
  payload: { board },
});
