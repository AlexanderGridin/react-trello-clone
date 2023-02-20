import { AppState } from "App/state/models/AppState";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { removeItemFromArray } from "shared/utils/array/removeItemFromArray/removeItemFromArray";
import { PinTasksListAction } from "../action-creators/createPinTasksListAction";

export const pinTasksListReducer = (state: AppState, action: PinTasksListAction): AppState => {
  const listToPin: TasksListViewModel = { ...action.payload.list };
  const board = state.boardsCache[listToPin.boardId];

  return {
    ...state,
    boardsCache: {
      ...state.boardsCache,
      [board.id]: {
        ...board,
        tasksLists: removeItemFromArray({
          array: board.tasksLists,
          item: listToPin,
          uniqueKey: "id",
        }),
        pinnedTasksLists: [...board.pinnedTasksLists, listToPin],
      },
    },
  };
};
