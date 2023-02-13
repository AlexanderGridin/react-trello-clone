import { AppState } from "App/state/models/AppState";
import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { UnpinTasksListAction } from "../actions/unpinTasksList";
import { removeItemFromArray } from "shared/utils/array/removeItemFromArray/removeItemFromArray";

export const unpinTasksListReducer = (
  state: AppState,
  action: UnpinTasksListAction
): AppState => {
  const listToUnpin: TasksListViewModel = { ...action.payload.list };

  return {
    ...state,
    boards:
      state.boards?.map((board: BoardViewModel) => {
        if (board.id !== listToUnpin.boardId) {
          return { ...board };
        }

        return {
          ...board,
          pinnedTasksLists: removeItemFromArray({
            array: board.pinnedTasksLists,
            item: listToUnpin,
            uniqueKey: "id",
          }),
          tasksLists: [listToUnpin, ...board.tasksLists],
        };
      }) ?? [],
  };
};
