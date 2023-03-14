import { PayloadAction } from "@reduxjs/toolkit";
import { TasksListViewModel } from "App/entities/TasksList/models";
import { removeItemFromArray } from "shared/utils/array/removeItemFromArray/removeItemFromArray";
import { IOpenedBoardState } from "../..";

interface Payload {
  list: TasksListViewModel;
}

export const removeTasksListReducer = (state: IOpenedBoardState, action: PayloadAction<Payload>): void => {
  const board = state.board;

  if (!board) {
    return;
  }

  const listToRemove: TasksListViewModel = action.payload.list;
  state.board = {
    ...board,
    pinnedTasksLists: listToRemove.isPinned
      ? removeItemFromArray({
          array: board.pinnedTasksLists,
          item: listToRemove,
          uniqueKey: "id",
        })
      : [...board.pinnedTasksLists],
    tasksLists: listToRemove.isPinned
      ? [...board.tasksLists]
      : removeItemFromArray({
          array: board.tasksLists,
          item: listToRemove,
          uniqueKey: "id",
        }),
  };
};
