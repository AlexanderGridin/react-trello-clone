import { BoardsState } from "..";

export const clearBoardsCacheReducer = (state: BoardsState) => {
  state.boardsCache = {};
};
