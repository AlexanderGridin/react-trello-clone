import { BoardViewModel } from "App/entities/Board/BoardViewModel";
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
    boards: state.boards.map((board: BoardViewModel) => {
      if (board.id !== list.boardId) {
        return { ...board };
      }

      const totalPinned = board.pinnedTasksLists.length;
      const lists = [...board.pinnedTasksLists, ...board.tasksLists];

      const updatedLists = lists.map((tasksList: TasksListModel) =>
        tasksList.id !== list.id
          ? {
              ...tasksList,
            }
          : {
              ...tasksList,
              tasks: [{ ...task, listId: tasksList.id }],
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
