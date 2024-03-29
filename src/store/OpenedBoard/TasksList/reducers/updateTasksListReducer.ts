import { PayloadAction } from "@reduxjs/toolkit";

import { parseTasksLists } from "entities/Board/utils/parseTasksLists";
import { TasksListViewModel } from "entities/TasksList/models";

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

  const isSortNecessary = unpinnedTasksLists.length > 1 && unpinnedTasksLists[0].rank > unpinnedTasksLists[1].rank;
  const tasksLists = isSortNecessary
    ? [...unpinnedTasksLists.sort((a, b) => a.rank - b.rank)]
    : [...unpinnedTasksLists];

  state.board = {
    ...board,
    pinnedTasksLists,
    tasksLists,
  };
};
