import { PayloadAction } from "@reduxjs/toolkit";

import { TaskViewModel } from "entities/Task/models";
import { TasksListViewModel } from "entities/TasksList/models";

import { IOpenedBoardState } from "../..";
import { replaceTaskInList } from "./utils/replaceTaskInList";
import { removeTaskFromList } from "./utils/removeTaskFromList";

interface Payload {
  taskToMove: TaskViewModel;
  taskToReplace: TaskViewModel;
}

export const moveTaskReducer = (state: IOpenedBoardState, action: PayloadAction<Payload>): void => {
  const board = state.board;

  if (!board) {
    return;
  }

  const { taskToMove, taskToReplace } = action.payload;
  const totalPinned = board.pinnedTasksLists.length;
  const lists = [...board.pinnedTasksLists, ...board.tasksLists];

  const updatedLists = lists.map((list: TasksListViewModel) => {
    if (list.id === taskToReplace.listId) {
      return replaceTaskInList({
        list,
        task: taskToMove,
        taskToReplace,
      });
    }

    if (list.id === taskToMove.listId) {
      return removeTaskFromList({
        list,
        task: taskToMove,
      });
    }

    return { ...list };
  });

  state.board = {
    ...board,
    pinnedTasksLists: updatedLists.slice(0, totalPinned),
    tasksLists: updatedLists.slice(totalPinned),
  };
};
