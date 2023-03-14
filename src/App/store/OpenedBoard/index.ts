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

export interface IOpenedBoardState {
  board: BoardWithTasksListsViewModel | null;
}

const initialState: IOpenedBoardState = {
  board: null,
};

const openedBoardSlice = createSlice({
  name: "[OPENED_BOARD]",
  initialState,
  reducers: {
    setBoard: (state: IOpenedBoardState, action: PayloadAction<{ board: BoardWithTasksListsViewModel | null }>) => {
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
} = openedBoardSlice.actions;
export const openedBoardReducer = openedBoardSlice.reducer;
