import { AppState } from "App/state/models/AppState";
import { SetBoardsAction } from "../actions/createSetBoardsAction";

export const setBoardsReducer = (
  state: AppState,
  action: SetBoardsAction
): AppState => {
  return {
    ...state,
    boards: action.payload.boards ? [...action.payload.boards] : null,
  };
};
