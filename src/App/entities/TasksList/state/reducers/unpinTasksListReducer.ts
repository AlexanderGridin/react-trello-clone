import { AppState } from "App/state/models/AppState";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { removeItemFromArray } from "shared/utils/array/removeItemFromArray/removeItemFromArray";
import { UnpinTasksListAction } from "../action-creators/createUnpinTasksListAction";

export const unpinTasksListReducer = (state: AppState, action: UnpinTasksListAction): AppState => {
  const listToUnpin: TasksListViewModel = { ...action.payload.list };
  const board = state.boardsCache[listToUnpin.boardId];

  return {
    ...state,
    boardsCache: {
      ...state.boardsCache,
      [board.id]: {
        ...board,
        pinnedTasksLists: removeItemFromArray({
          array: board.pinnedTasksLists,
          item: listToUnpin,
          uniqueKey: "id",
        }),
        tasksLists: [listToUnpin, ...board.tasksLists],
      },
    },
  };
};
