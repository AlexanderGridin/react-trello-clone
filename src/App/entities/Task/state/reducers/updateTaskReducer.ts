import { AppState } from "App/state/models/AppState";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { UpdateTaskAction } from "../action-creators/createUpdateTaskAction";
import { TaskViewModel } from "../../models";

export const updateTaskReducer = (state: AppState, action: UpdateTaskAction): AppState => {
  const taskToUpdate: TaskViewModel = { ...action.payload.task };
  const board = state.boardsCache[taskToUpdate.boardId];

  const totalPinned = board.pinnedTasksLists.length;
  const lists = [...board.pinnedTasksLists, ...board.tasksLists];

  const updatedLists = lists.map((list: TasksListViewModel) =>
    list.id !== taskToUpdate.listId
      ? {
          ...list,
        }
      : {
          ...list,
          tasks: list.tasks.map((task: TaskViewModel) =>
            task.id === taskToUpdate.id ? { ...taskToUpdate } : { ...task }
          ),
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
