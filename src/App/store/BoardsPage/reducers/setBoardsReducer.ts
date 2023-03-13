import { PayloadAction } from "@reduxjs/toolkit";
import { BoardViewModel } from "App/entities/Board/models";
import { IBoardsPageState } from "..";

interface Payload {
  boards: BoardViewModel[] | null;
}

export const setBoardsReducer = (state: IBoardsPageState, action: PayloadAction<Payload>) => {
  state.boards = action.payload.boards ? [...action.payload.boards] : null;
};
