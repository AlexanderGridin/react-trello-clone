import { AppState } from "App/state/models/AppState";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { AddTasksListAction } from "../action-creators/createAddTasksListAction";

export const addTasksListReducer = (state: AppState, action: AddTasksListAction): AppState => {
  const listToAdd: TasksListViewModel = { ...action.payload.list };
  const board = state.boardsCache[listToAdd.boardId];

  return {
    ...state,
    boardsCache: {
      ...state.boardsCache,
      [board.id]: {
        ...board,
        tasksLists: listToAdd.isPinned ? [...board.tasksLists] : [...board.tasksLists, listToAdd],
        pinnedTasksLists: listToAdd.isPinned ? [...board.pinnedTasksLists, listToAdd] : [...board.pinnedTasksLists],
      },
    },
  };
};
