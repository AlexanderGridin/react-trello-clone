import { BoardModel } from "App/entities/Board/BoardModel";
import { AppState } from "App/state/models/AppState";
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
