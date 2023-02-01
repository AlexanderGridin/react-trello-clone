import { BoardModel } from "App/entities/Board/BoardModel";
import { TasksListModel } from "App/entities/TasksList/TasksListModel";
import { AppState } from "App/state/models/AppState";
import { PushTaskInTasksListAction } from "../actions/pushTaskInTasksList";

export const pushTaskInTasksListReducer = (
  state: AppState,
  action: PushTaskInTasksListAction
): AppState => {
  const { list, task } = action.payload;

  return {
    ...state,
    boards: state.boards.map((board: BoardModel) => {
      if (board.id !== list.boardId) {
        return { ...board };
      }

      return {
        ...board,
        tasksLists: board.tasksLists.map((tasksList: TasksListModel) => {
          if (tasksList.id !== list.id) {
            return { ...tasksList };
          }

          return {
            ...tasksList,
            tasks: [{ ...task, listId: tasksList.id }],
          };
        }),
      };
    }),
  };
};
