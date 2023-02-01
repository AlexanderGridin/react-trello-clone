import { AppState } from "App/state/models/AppState";
import { AddTaskAction } from "../actions/addTask";
import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { TaskModel } from "App/entities/Task/TaskModel";
import { TasksListModel } from "App/entities/TasksList/TasksListModel";

export const addTaskReducer = (
  state: AppState,
  action: AddTaskAction
): AppState => {
  const taskToAdd: TaskModel = { ...action.payload.task };

  return {
    ...state,
    boards: state.boards.map((board: BoardViewModel) => {
      if (board.id !== taskToAdd.boardId) {
        return { ...board };
      }

      const totalPinned = board.pinnedTasksLists.length;
      const lists = [...board.pinnedTasksLists, ...board.tasksLists];

      const updatedLists = lists.map((list: TasksListModel) =>
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
    }),
  };
};
