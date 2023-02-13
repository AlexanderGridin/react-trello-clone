import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { AppState } from "App/state/models/AppState";
import { PushTaskInTasksListAction } from "../actions/pushTaskInTasksList";

export const pushTaskInTasksListReducer = (
  state: AppState,
  action: PushTaskInTasksListAction
): AppState => {
  const { list, task } = action.payload;
  const board = state.boardsCache[list.boardId];
  const totalPinned = board.pinnedTasksLists.length;
  const lists = [...board.pinnedTasksLists, ...board.tasksLists];

  const updatedLists = lists.map((tasksList: TasksListViewModel) =>
    tasksList.id !== list.id
      ? {
          ...tasksList,
        }
      : {
          ...tasksList,
          tasks: [{ ...task, listId: tasksList.id }],
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
