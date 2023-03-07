import { PayloadAction } from "@reduxjs/toolkit";
import { BoardsState } from "..";
import { BoardViewModel } from "../../models";

interface Payload {
  boards: BoardViewModel[] | null;
}

export const setBoardsReducer = (state: BoardsState, action: PayloadAction<Payload>) => {
  state.boards = action.payload.boards ? [...action.payload.boards] : null;
};
