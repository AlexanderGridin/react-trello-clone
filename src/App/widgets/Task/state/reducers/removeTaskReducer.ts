import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { TaskModel } from "App/entities/Task/TaskModel";
import { TasksListModel } from "App/entities/TasksList/TasksListModel";
import { AppState } from "App/state/models/AppState";
import { removeItemFromArray } from "shared/utils/array/removeItemFromArray";
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

      const totalPinned = board.pinnedTasksLists.length;
      const lists = [...board.pinnedTasksLists, ...board.tasksLists];

      const updatedLists = lists.map((list: TasksListModel) =>
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
        ...board,
        pinnedTasksLists: updatedLists.slice(0, totalPinned),
        tasksLists: updatedLists.slice(totalPinned),
      };
    }),
  };
};
