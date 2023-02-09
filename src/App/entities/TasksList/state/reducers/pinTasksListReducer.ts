import { AppState } from "App/state/models/AppState";
import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { PinTasksListAction } from "../actions/pinTasksList";
import { removeItemFromArray } from "shared/utils/array/removeItemFromArray/removeItemFromArray";

export const pinTasksListReducer = (
  state: AppState,
  action: PinTasksListAction
): AppState => {
  const listToPin: TasksListViewModel = { ...action.payload.list };

  return {
    ...state,
    boards: state.boards.map((board: BoardViewModel) => {
      if (board.id !== listToPin.boardId) {
        return { ...board };
      }

      return {
        ...board,
        tasksLists: removeItemFromArray({
          array: board.tasksLists,
          item: listToPin,
          uniqueKey: "id",
        }),
        pinnedTasksLists: [...board.pinnedTasksLists, listToPin],
      };
    }),
  };
};
