import { PayloadAction } from "@reduxjs/toolkit";
import { TaskViewModel } from "App/entities/Task/models";
import { TasksListViewModel } from "App/entities/TasksList/models";
import { IOpenedBoardState } from "../..";

interface Payload {
  list: TasksListViewModel;
  task: TaskViewModel;
}

export const pushTaskInTasksListReducer = (state: IOpenedBoardState, action: PayloadAction<Payload>): void => {
  const board = state.board;

  if (!board) {
    return;
  }

  const { list, task } = action.payload;
  const totalPinned = board.pinnedTasksLists.length;
  const lists = [...board.pinnedTasksLists, ...board.tasksLists];

  const updatedLists = lists.map((tasksList: TasksListViewModel) =>
    tasksList.id !== list.id
      ? {
          ...tasksList,
        }
      : {
          ...tasksList,
          tasks: [{ ...task, listId: tasksList.id }],
        }
  );

  state.board = {
    ...board,
    pinnedTasksLists: updatedLists.slice(0, totalPinned),
    tasksLists: updatedLists.slice(totalPinned),
  };
};
