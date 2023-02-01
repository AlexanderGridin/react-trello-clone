import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { TaskModel } from "App/entities/Task/TaskModel";
import { TasksListModel } from "App/entities/TasksList/TasksListModel";
import { AppState } from "App/state/models/AppState";
import { RemoveTaskAction } from "../actions/removeTask";

export const removeTaskReducer = (
  state: AppState,
  action: RemoveTaskAction
): AppState => {
  const taskToRemove: TaskModel = action.payload.task;

  return {
    ...state,
    boards: state.boards.map((board: BoardViewModel) => {
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
