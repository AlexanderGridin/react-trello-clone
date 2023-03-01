import { TasksListViewModel } from "App/entities/TasksList/models";
import { AppState } from "App/state/models/AppState";
import { removeItemFromArray } from "shared/utils/array/removeItemFromArray/removeItemFromArray";
import { TaskViewModel } from "../../models";
import { RemoveTaskAction } from "../action-creators/createRemoveTaskAction";

export const removeTaskReducer = (state: AppState, action: RemoveTaskAction): AppState => {
  const taskToRemove: TaskViewModel = action.payload.task;
  const board = state.boardsCache[taskToRemove.boardId];
  const totalPinned = board.pinnedTasksLists.length;
  const lists = [...board.pinnedTasksLists, ...board.tasksLists];

  const updatedLists = lists.map((list: TasksListViewModel) =>
    list.id !== taskToRemove.listId
      ? {
          ...list,
        }
      : {
          ...list,
          tasks: removeItemFromArray({
            array: list.tasks,
            item: taskToRemove,
            uniqueKey: "id",
          }),
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
