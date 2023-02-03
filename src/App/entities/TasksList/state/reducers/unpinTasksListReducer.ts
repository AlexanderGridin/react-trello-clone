import { AppState } from "App/state/models/AppState";
import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { TasksListModel } from "App/entities/TasksList/TasksListModel";
import { UnpinTasksListAction } from "../actions/unpinTasksList";
import { removeItemFromArray } from "shared/utils/array/removeItemFromArray";

export const unpinTasksListReducer = (
  state: AppState,
  action: UnpinTasksListAction
): AppState => {
  const listToUnpin: TasksListModel = { ...action.payload.list };

  return {
    ...state,
    boards: state.boards.map((board: BoardViewModel) => {
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
    }),
  };
};
