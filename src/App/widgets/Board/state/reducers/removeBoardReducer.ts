import { BoardViewModel } from "App/entities/Board/BoardViewModel";
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
      ({ id }: BoardViewModel) => id !== boardToRemove.id
    ),
  };
};
