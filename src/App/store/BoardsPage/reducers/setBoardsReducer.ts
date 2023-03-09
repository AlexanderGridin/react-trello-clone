import { PayloadAction } from "@reduxjs/toolkit";
import { BoardViewModel } from "App/entities/Board/models";
import { BoardsPageState } from "..";

interface Payload {
  boards: BoardViewModel[] | null;
}

export const setBoardsReducer = (state: BoardsPageState, action: PayloadAction<Payload>) => {
  state.boards = action.payload.boards ? [...action.payload.boards] : null;
};
