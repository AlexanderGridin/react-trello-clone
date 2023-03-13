import { TasksListViewModel } from "App/entities/TasksList/models";
import { IBoardPageState } from "../..";
import { PayloadAction } from "@reduxjs/toolkit";
import { TaskViewModel } from "App/entities/Task/models";

interface Payload {
  task: TaskViewModel;
}

export const updateTaskReducer = (state: IBoardPageState, action: PayloadAction<Payload>): void => {
  const board = state.board;

  if (!board) {
    return;
  }

  const taskToUpdate: TaskViewModel = { ...action.payload.task };

  const totalPinned = board.pinnedTasksLists.length;
  const lists = [...board.pinnedTasksLists, ...board.tasksLists];

  const updatedLists = lists.map((list: TasksListViewModel) =>
    list.id !== taskToUpdate.listId
      ? {
          ...list,
        }
      : {
          ...list,
          tasks: list.tasks.map((task: TaskViewModel) =>
            task.id === taskToUpdate.id ? { ...taskToUpdate } : { ...task }
          ),
        }
  );

  state.board = {
    ...board,
    pinnedTasksLists: updatedLists.slice(0, totalPinned),
    tasksLists: updatedLists.slice(totalPinned),
  };
};
