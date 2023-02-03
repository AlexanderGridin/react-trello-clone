import { AppState } from "App/state/models/AppState";
import { BoardViewModel } from "../../BoardViewModel";
import { UpdateBoardAction } from "../actions/updateBoard";

export const updateBoardReducer = (
  state: AppState,
  action: UpdateBoardAction
): AppState => {
  const boardToUpdate = action.payload.board;

  return {
    ...state,
    boards: state.boards.map((board: BoardViewModel) => {
      if (board.id !== boardToUpdate.id) {
        return { ...board };
      }

      return {
        ...boardToUpdate,
      };
    }),
  };
};