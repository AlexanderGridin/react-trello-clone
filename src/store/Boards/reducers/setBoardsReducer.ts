import { PayloadAction } from "@reduxjs/toolkit";

import { BoardViewModel } from "entities/Board/models";

import { IBoardsState } from "..";

interface Payload {
  boards: BoardViewModel[] | null;
}

export const setBoardsReducer = (state: IBoardsState, action: PayloadAction<Payload>) => {
  state.boards = action.payload.boards ? [...action.payload.boards] : null;
};
