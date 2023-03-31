import { PayloadAction } from "@reduxjs/toolkit";

import { TasksListViewModel } from "entities/TasksList/models";

import { IOpenedBoardState } from "../..";

interface Payload {
  list: TasksListViewModel;
}

export const addTasksListReducer = (state: IOpenedBoardState, action: PayloadAction<Payload>) => {
  const board = state.board;

  if (!board) {
    return;
  }

  const listToAdd: TasksListViewModel = { ...action.payload.list };

  state.board = {
    ...board,
    tasksLists: listToAdd.isPinned ? [...board.tasksLists] : [...board.tasksLists, listToAdd],
    pinnedTasksLists: listToAdd.isPinned ? [...board.pinnedTasksLists, listToAdd] : [...board.pinnedTasksLists],
  };
};
