import { AppState } from "App/state/models/AppState";
import { AddTasksListAction } from "../actions/addTasksList";
import { BoardModel } from "App/entities/Board/BoardModel";
import { TasksListModel } from "App/entities/TasksList/TasksListModel";

export const addTasksListReducer = (
  state: AppState,
  action: AddTasksListAction
): AppState => {
  const listToAdd: TasksListModel = { ...action.payload.list };

  return {
    ...state,
    boards: state.boards.map((board: BoardModel) => {
      if (board.id !== listToAdd.boardId) {
        return { ...board };
      }

      return {
        ...board,
        tasksLists: [...board.tasksLists, listToAdd],
      };
    }),
  };
};
