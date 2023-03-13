import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BoardWithTasksListsViewModel } from "App/entities/Board/models";
import { addTaskReducer, moveTaskReducer, removeTaskReducer, updateTaskReducer } from "./Task/reducers";

import {
  addTasksListReducer,
  moveTasksListReducer,
  pushTaskInTasksListReducer,
  removeTasksListReducer,
  updateTasksListReducer,
} from "./TasksList/reducers";

export interface IBoardPageState {
  board: BoardWithTasksListsViewModel | null;
}

const initialState: IBoardPageState = {
  board: null,
};

const boardPageSlice = createSlice({
  name: "[BOARD_PAGE]",
  initialState,
  reducers: {
    setBoard: (state: IBoardPageState, action: PayloadAction<{ board: BoardWithTasksListsViewModel | null }>) => {
      state.board = action.payload.board;
    },
    // TasksList
    addTasksList: addTasksListReducer,
    moveTasksList: moveTasksListReducer,
    pushTaskInTasksList: pushTaskInTasksListReducer,
    removeTasksList: removeTasksListReducer,
    updateTasksList: updateTasksListReducer,
    //Task
    addTask: addTaskReducer,
    moveTask: moveTaskReducer,
    removeTask: removeTaskReducer,
    updateTask: updateTaskReducer,
  },
});

export const {
  setBoard,
  // TasksList
  addTasksList,
  moveTasksList,
  pushTaskInTasksList,
  removeTasksList,
  updateTasksList,
  //Task
  addTask,
  moveTask,
  removeTask,
  updateTask,
} = boardPageSlice.actions;
export const boardPageReducer = boardPageSlice.reducer;
