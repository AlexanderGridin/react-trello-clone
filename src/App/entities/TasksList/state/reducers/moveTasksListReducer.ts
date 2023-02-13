import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { AppState } from "App/state/models/AppState";
import { MoveTasksListAction } from "../actions/moveTasksList";
import { moveTasksLists } from "./utils/moveTasksLists";

export const moveTasksListReducer = (
  state: AppState,
  action: MoveTasksListAction
): AppState => {
  const listToMove = action.payload.listToMove;
  const listToReplace = action.payload.listToReplace;

  return {
    ...state,
    boards:
      state.boards?.map((board: BoardViewModel) => {
        if (board.id !== listToMove.boardId) {
          return { ...board };
        }

        if (listToMove.isPinned) {
          return {
            ...board,
            pinnedTasksLists: moveTasksLists(
              board.pinnedTasksLists,
              listToMove,
              listToReplace
            ),
          };
        }

        return {
          ...board,
          tasksLists: moveTasksLists(
            board.tasksLists,
            listToMove,
            listToReplace
          ),
        };
      }) ?? [],
  };
};
