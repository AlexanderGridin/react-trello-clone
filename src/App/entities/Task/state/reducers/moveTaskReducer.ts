import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { AppState } from "App/state/models/AppState";
import { MoveTaskAction } from "../actions/moveTask";
import { removeTaskFromList } from "./utils/removeTaskFromList";
import { replaceTaskInList } from "./utils/replaceTaskInList";

export const moveTaskReducer = (
  state: AppState,
  action: MoveTaskAction
): AppState => {
  const { taskToMove, taskToReplace } = action.payload;

  return {
    ...state,
    boards:
      state.boards?.map((board: BoardViewModel) => {
        if (board.id !== taskToMove.boardId) {
          return { ...board };
        }

        const totalPinned = board.pinnedTasksLists.length;
        const lists = [...board.pinnedTasksLists, ...board.tasksLists];

        const updatedLists = lists.map((list: TasksListViewModel) => {
          if (list.id === taskToReplace.listId) {
            return replaceTaskInList({
              list,
              task: taskToMove,
              taskToReplace,
            });
          }

          if (list.id === taskToMove.listId) {
            return removeTaskFromList({
              list,
              task: taskToMove,
            });
          }

          return { ...list };
        });

        return {
          ...board,
          pinnedTasksLists: updatedLists.slice(0, totalPinned),
          tasksLists: updatedLists.slice(totalPinned),
        };
      }) ?? [],
  };
};
