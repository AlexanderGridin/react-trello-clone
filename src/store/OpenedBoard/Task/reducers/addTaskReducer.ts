import { TasksListViewModel } from "App/entities/TasksList/models";
import { TaskViewModel } from "App/entities/Task/models";
import { IOpenedBoardState } from "../..";
import { PayloadAction } from "@reduxjs/toolkit";

interface Payload {
  task: TaskViewModel;
}

export const addTaskReducer = (state: IOpenedBoardState, action: PayloadAction<Payload>): void => {
  const board = state.board;

  if (!board) {
    return;
  }

  const taskToAdd: TaskViewModel = { ...action.payload.task };
  const totalPinned = board.pinnedTasksLists.length;
  const lists = [...board.pinnedTasksLists, ...board.tasksLists];

  const updatedLists = lists.map((list: TasksListViewModel) =>
    list.id !== taskToAdd.listId
      ? {
          ...list,
        }
      : {
          ...list,
          tasks: [...list.tasks, taskToAdd],
        }
  );

  state.board = {
    ...board,
    pinnedTasksLists: updatedLists.slice(0, totalPinned),
    tasksLists: updatedLists.slice(totalPinned),
  };
};
