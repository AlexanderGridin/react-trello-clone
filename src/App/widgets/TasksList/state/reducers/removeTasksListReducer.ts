import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { TasksListModel } from "App/entities/TasksList/TasksListModel";
import { AppState } from "App/state/models/AppState";
import { RemoveTasksListAction } from "../actions/removeTasksList";

export const removeTasksListReducer = (
  state: AppState,
  action: RemoveTasksListAction
): AppState => {
  const listToRemove: TasksListModel = action.payload.list;

  return {
    ...state,
    boards: state.boards.map((board: BoardViewModel) => {
      if (board.id !== listToRemove.boardId) {
        return { ...board };
      }

      const totalPinned = board.pinnedTasksLists.length;
      const lists = [...board.pinnedTasksLists, ...board.tasksLists];
      const updatedLists = lists.filter(
        (list: TasksListModel) => list.id !== listToRemove.id
      );

      return {
        ...board,
        pinnedTasksLists: updatedLists.slice(0, totalPinned),
        tasksLists: updatedLists.slice(totalPinned),
      };
    }),
  };
};
