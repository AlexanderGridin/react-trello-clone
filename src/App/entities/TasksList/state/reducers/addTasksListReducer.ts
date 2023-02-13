import { AppState } from "App/state/models/AppState";
import { AddTasksListAction } from "../actions/addTasksList";
import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";

export const addTasksListReducer = (
  state: AppState,
  action: AddTasksListAction
): AppState => {
  const listToAdd: TasksListViewModel = { ...action.payload.list };

  return {
    ...state,
    boards:
      state.boards?.map((board: BoardViewModel) => {
        if (board.id !== listToAdd.boardId) {
          return { ...board };
        }

        return {
          ...board,
          tasksLists: [...board.tasksLists, listToAdd],
        };
      }) ?? [],
  };
};
