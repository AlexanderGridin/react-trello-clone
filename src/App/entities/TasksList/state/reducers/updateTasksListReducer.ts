import { parseTasksLists } from "App/entities/Board/utils/parseTasksLists";
import { AppState } from "App/state/models/AppState";
import { TasksListViewModel } from "../../TasksListViewModel";
import { UpdateTasksListAction } from "../action-creators/createUpdateTasksListAction";

export const updateTasksListReducer = (state: AppState, action: UpdateTasksListAction): AppState => {
  const listToUpdate = action.payload.list;
  const board = state.boardsCache[listToUpdate.boardId];
  const lists = [...board.pinnedTasksLists, ...board.tasksLists];

  const updateList = (list: TasksListViewModel) => (list.id === listToUpdate.id ? { ...listToUpdate } : { ...list });
  const updatedLists = lists.map(updateList);
  const { pinnedTasksLists, unpinnedTasksLists } = parseTasksLists(updatedLists);

  return {
    ...state,
    boardsCache: {
      ...state.boardsCache,
      [board.id]: {
        ...board,
        pinnedTasksLists,
        tasksLists: unpinnedTasksLists,
      },
    },
  };
};
