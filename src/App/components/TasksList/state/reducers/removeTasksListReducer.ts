import { BoardModel } from "App/entities/Board/BoardModel";
import { AppState } from "App/state/models/AppState";
import { TasksListModel } from "../../models/TasksListModel";
import { RemoveTasksListAction } from "../actions/removeTasksList";

export const removeTasksListReducer = (
  state: AppState,
  action: RemoveTasksListAction
): AppState => {
  const listToRemove: TasksListModel = action.payload.list;

  return {
    ...state,
    boards: state.boards.map((board: BoardModel) => {
      if (board.id !== listToRemove.boardId) {
        return { ...board };
      }

      return {
        ...board,
        tasksLists: board.tasksLists.filter(
          ({ id }: TasksListModel) => id !== listToRemove.id
        ),
      };
    }),
  };
};
