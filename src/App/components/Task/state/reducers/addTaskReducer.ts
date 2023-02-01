import { AppState } from "App/state/models/AppState";
import { AddTaskAction } from "../actions/addTask";
import { BoardModel } from "App/entities/Board/BoardModel";
import { TaskModel } from "App/entities/Task/TaskModel";
import { TasksListModel } from "App/entities/TasksList/TasksListModel";

export const addTaskReducer = (
  state: AppState,
  action: AddTaskAction
): AppState => {
  const taskToAdd: TaskModel = { ...action.payload.task };

  return {
    ...state,
    boards: state.boards.map((board: BoardModel) => {
      if (board.id !== taskToAdd.boardId) {
        return { ...board };
      }

      return {
        ...board,
        tasksLists: board.tasksLists.map((list: TasksListModel) => {
          if (list.id !== taskToAdd.listId) {
            return { ...list };
          }

          return {
            ...list,
            tasks: [...list.tasks, taskToAdd],
          };
        }),
      };
    }),
  };
};
