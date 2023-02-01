import { AppState } from "App/state/models/AppState";
import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { TasksListModel } from "App/entities/TasksList/TasksListModel";
import { PinTasksListAction } from "../actions/pinTasksList";

export const pinTasksListReducer = (
  state: AppState,
  action: PinTasksListAction
): AppState => {
  const listToPin: TasksListModel = { ...action.payload.list };

  return {
    ...state,
    boards: state.boards.map((board: BoardViewModel) => {
      if (board.id !== listToPin.boardId) {
        return { ...board };
      }

      return {
        ...board,
        tasksLists: board.tasksLists.filter(
          (list: TasksListModel) => list.id !== listToPin.id
        ),
        pinnedTasksLists: [...board.pinnedTasksLists, listToPin],
      };
    }),
  };
};
