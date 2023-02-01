import { TaskModel } from "App/components/Task/models/TaskModel";
import { TasksListModel } from "App/components/TasksList/models/TasksListModel";
import { BoardModel } from "App/entities/Board/BoardModel";
import { AppState } from "App/state/models/AppState";
import { RemoveTaskAction } from "../actions/removeTask";

export const removeTaskReducer = (
  state: AppState,
  action: RemoveTaskAction
): AppState => {
  const taskToRemove: TaskModel = action.payload.task;

  return {
    ...state,
    boards: state.boards.map((board: BoardModel) => {
      if (board.id !== taskToRemove.boardId) {
        return { ...board };
      }

      return {
        ...board,
        tasksLists: board.tasksLists.map((list: TasksListModel) => {
          if (list.id !== taskToRemove.listId) {
            return { ...list };
          }

          return {
            ...list,
            tasks: list.tasks.filter(
              ({ id }: TaskModel) => id !== taskToRemove.id
            ),
          };
        }),
      };
    }),
  };
};
