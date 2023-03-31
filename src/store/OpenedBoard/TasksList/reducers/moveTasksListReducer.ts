import { PayloadAction } from "@reduxjs/toolkit";

import { TasksListViewModel } from "entities/TasksList/models";

import { IOpenedBoardState } from "../..";
import { moveTasksLists } from "./utils/moveTasksLists";

interface Payload {
  listToMove: TasksListViewModel;
  listToReplace: TasksListViewModel;
}

export const moveTasksListReducer = (state: IOpenedBoardState, action: PayloadAction<Payload>): void => {
  const board = state.board;

  if (!board) {
    return;
  }

  const listToMove = action.payload.listToMove;
  const listToReplace = action.payload.listToReplace;

  state.board = listToMove.isPinned
    ? {
        ...board,
        pinnedTasksLists: moveTasksLists(board.pinnedTasksLists, listToMove, listToReplace),
      }
    : {
        ...board,
        tasksLists: moveTasksLists(board.tasksLists, listToMove, listToReplace),
      };
};
