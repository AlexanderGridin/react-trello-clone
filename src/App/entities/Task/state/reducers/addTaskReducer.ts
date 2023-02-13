import { AppState } from "App/state/models/AppState";
import { AddTaskAction } from "../actions/addTask";
import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";

export const addTaskReducer = (
  state: AppState,
  action: AddTaskAction
): AppState => {
  const taskToAdd: TaskViewModel = { ...action.payload.task };

  return {
    ...state,
    boards:
      state.boards?.map((board: BoardViewModel) => {
        if (board.id !== taskToAdd.boardId) {
          return { ...board };
        }

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
          ...board,
          pinnedTasksLists: updatedLists.slice(0, totalPinned),
          tasksLists: updatedLists.slice(totalPinned),
        };
      }) ?? [],
  };
};
