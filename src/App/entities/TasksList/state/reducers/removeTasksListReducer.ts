import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { AppState } from "App/state/models/AppState";
import { removeItemFromArray } from "shared/utils/array/removeItemFromArray/removeItemFromArray";
import { RemoveTasksListAction } from "../actions/removeTasksList";

export const removeTasksListReducer = (
  state: AppState,
  action: RemoveTasksListAction
): AppState => {
  const listToRemove: TasksListViewModel = action.payload.list;

  return {
    ...state,
    boards:
      state.boards?.map((board: BoardViewModel) => {
        if (board.id !== listToRemove.boardId) {
          return { ...board };
        }

        return {
          ...board,
          pinnedTasksLists: listToRemove.isPinned
            ? removeItemFromArray({
                array: board.pinnedTasksLists,
                item: listToRemove,
                uniqueKey: "id",
              })
            : [...board.pinnedTasksLists],
          tasksLists: listToRemove.isPinned
            ? [...board.tasksLists]
            : removeItemFromArray({
                array: board.tasksLists,
                item: listToRemove,
                uniqueKey: "id",
              }),
        };
      }) ?? [],
  };
};
