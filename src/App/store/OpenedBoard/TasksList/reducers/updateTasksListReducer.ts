import { PayloadAction } from "@reduxjs/toolkit";
import { parseTasksLists } from "App/entities/Board/utils/parseTasksLists";
import { TasksListViewModel } from "App/entities/TasksList/models";
import { IOpenedBoardState } from "../..";

interface Payload {
  list: TasksListViewModel;
}

export const updateTasksListReducer = (state: IOpenedBoardState, action: PayloadAction<Payload>): void => {
  const board = state.board;

  if (!board) {
    return;
  }

  const listToUpdate = action.payload.list;
  const lists = [...board.pinnedTasksLists, ...board.tasksLists];

  const updateList = (list: TasksListViewModel) => (list.id === listToUpdate.id ? { ...listToUpdate } : { ...list });
  const updatedLists = lists.map(updateList);
  const { pinnedTasksLists, unpinnedTasksLists } = parseTasksLists(updatedLists);

  state.board = {
    ...board,
    pinnedTasksLists,
    tasksLists: unpinnedTasksLists,
  };
};
