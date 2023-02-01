import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { TasksListModel } from "App/entities/TasksList/TasksListModel";
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
    boards: state.boards.map((board: BoardViewModel) => {
      if (board.id !== taskToMove.boardId) {
        return { ...board };
      }

      return {
        ...board,
        tasksLists: board.tasksLists.map((list: TasksListModel) => {
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
        }),
      };
    }),
  };
};
