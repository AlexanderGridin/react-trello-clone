import { AppState } from "App/state/models/AppState";
import { AddTaskAction } from "../actions/addTask";
import { TasksListModel } from "App/components/TasksList/models/TasksListModel";
import { TaskModel } from "../../models/TaskModel";
import { BoardModel } from "App/components/Board/models/BoardModel";

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
