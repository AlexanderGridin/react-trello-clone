import { PayloadAction } from "@reduxjs/toolkit";
import { TaskViewModel } from "App/entities/Task/models";
import { TasksListViewModel } from "App/entities/TasksList/models";
import { removeItemFromArray } from "shared/utils/array/removeItemFromArray/removeItemFromArray";
import { BoardPageState } from "../..";

interface Payload {
  task: TaskViewModel;
}

export const removeTaskReducer = (state: BoardPageState, action: PayloadAction<Payload>): void => {
  const board = state.board;

  if (!board) {
    return;
  }

  const taskToRemove: TaskViewModel = action.payload.task;
  const totalPinned = board.pinnedTasksLists.length;
  const lists = [...board.pinnedTasksLists, ...board.tasksLists];

  const updatedLists = lists.map((list: TasksListViewModel) =>
    list.id !== taskToRemove.listId
      ? {
          ...list,
        }
      : {
          ...list,
          tasks: removeItemFromArray({
            array: list.tasks,
            item: taskToRemove,
            uniqueKey: "id",
          }),
        }
  );

  state.board = {
    ...board,
    pinnedTasksLists: updatedLists.slice(0, totalPinned),
    tasksLists: updatedLists.slice(totalPinned),
  };
};
