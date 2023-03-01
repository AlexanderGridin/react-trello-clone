import { AppState } from "App/state/models/AppState";
import { AddTaskAction } from "../action-creators/createAddTaskAction";
import { TaskViewModel } from "../../models";
import { TasksListViewModel } from "App/entities/TasksList/models";

export const addTaskReducer = (state: AppState, action: AddTaskAction): AppState => {
  const taskToAdd: TaskViewModel = { ...action.payload.task };
  const board = state.boardsCache[taskToAdd.boardId];
  const totalPinned = board.pinnedTasksLists.length;
  const lists = [...board.pinnedTasksLists, ...board.tasksLists];

  const updatedLists = lists.map((list: TasksListViewModel) =>
    list.id !== taskToAdd.listId
      ? {
          ...list,
        }
      : {
          ...list,
          tasks: [...list.tasks, taskToAdd],
        }
  );

  return {
    ...state,
    boardsCache: {
      ...state.boardsCache,
      [board.id]: {
        ...board,
        pinnedTasksLists: updatedLists.slice(0, totalPinned),
        tasksLists: updatedLists.slice(totalPinned),
      },
    },
  };
};
