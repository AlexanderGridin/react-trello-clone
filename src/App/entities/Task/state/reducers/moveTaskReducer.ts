import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { AppState } from "App/state/models/AppState";
import { MoveTaskAction } from "../action-creators/createMoveTaskAction";
import { removeTaskFromList } from "./utils/removeTaskFromList";
import { replaceTaskInList } from "./utils/replaceTaskInList";

export const moveTaskReducer = (state: AppState, action: MoveTaskAction): AppState => {
  const { taskToMove, taskToReplace } = action.payload;
  const board = state.boardsCache[taskToMove.boardId];
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
