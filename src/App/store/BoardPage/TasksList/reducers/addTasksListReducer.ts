import { PayloadAction } from "@reduxjs/toolkit";
import { TasksListViewModel } from "App/entities/TasksList/models";
import { BoardPageState } from "../..";

interface Payload {
  list: TasksListViewModel;
}

export const addTasksListReducer = (state: BoardPageState, action: PayloadAction<Payload>) => {
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
