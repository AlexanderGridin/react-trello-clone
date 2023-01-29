import { AppState } from "App/state/models/AppState";
import { BoardModel } from "../../models/BoardModel";
import { RemoveBoardAction } from "../actions/removeBoard";

export const removeBoardReducer = (
  state: AppState,
  action: RemoveBoardAction
): AppState => {
  const boardToRemove = action.payload.board;

  return {
    ...state,
    boards: state.boards.filter(
      ({ id }: BoardModel) => id !== boardToRemove.id
    ),
  };
};
