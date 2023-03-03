import { AppState } from "App/state/models/AppState";
import { BoardViewModel } from "../../models";
import { UpdateBoardAction } from "../action-creators/createUpdateBoardAction";

export const updateBoardReducer = (state: AppState, action: UpdateBoardAction): AppState => {
  const boardToUpdate = action.payload.board;

  return {
    ...state,
    boards:
      state.boards?.map((board: BoardViewModel) => {
        if (board.id !== boardToUpdate.id) {
          return { ...board };
        }

        return {
          ...boardToUpdate,
        };
      }) ?? [],
    boardsCache: {
      ...state.boardsCache,
      [boardToUpdate.id]: {
        ...state.boardsCache[boardToUpdate.id],
        isFavorite: boardToUpdate.isFavorite,
        title: boardToUpdate.title,
      },
    },
  };
};
