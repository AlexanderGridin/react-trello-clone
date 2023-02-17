import { AppState } from "App/state/models/AppState";
import { MoveTasksListAction } from "../action-creators/createMoveTasksListAction";
import { moveTasksLists } from "./utils/moveTasksLists";

export const moveTasksListReducer = (
  state: AppState,
  action: MoveTasksListAction
): AppState => {
  const listToMove = action.payload.listToMove;
  const listToReplace = action.payload.listToReplace;
  const board = state.boardsCache[listToMove.boardId];

  return {
    ...state,
    boardsCache: {
      ...state.boardsCache,
      [board.id]: listToMove.isPinned
        ? {
            ...board,
            pinnedTasksLists: moveTasksLists(
              board.pinnedTasksLists,
              listToMove,
              listToReplace
            ),
          }
        : {
            ...board,
            tasksLists: moveTasksLists(
              board.tasksLists,
              listToMove,
              listToReplace
            ),
          },
    },
  };
};
