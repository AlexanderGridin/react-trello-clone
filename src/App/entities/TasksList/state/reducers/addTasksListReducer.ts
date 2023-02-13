import { AppState } from "App/state/models/AppState";
import { AddTasksListAction } from "../actions/addTasksList";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";

export const addTasksListReducer = (
  state: AppState,
  action: AddTasksListAction
): AppState => {
  const listToAdd: TasksListViewModel = { ...action.payload.list };
  const board = state.boardsCache[listToAdd.boardId];

  return {
    ...state,
    boardsCache: {
      ...state.boardsCache,
      [board.id]: {
        ...board,
        tasksLists: [...board.tasksLists, listToAdd],
      },
    },
  };
};
