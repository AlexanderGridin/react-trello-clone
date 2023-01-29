import { AppState } from "App/state/models/AppState";
import { AddBoardAction } from "../actions/addBoard";

export const addBoardReducer = (
  state: AppState,
  action: AddBoardAction
): AppState => {
  const board = action.payload.board;

  return {
    ...state,
    boards: [...state.boards, board],
  };
};
