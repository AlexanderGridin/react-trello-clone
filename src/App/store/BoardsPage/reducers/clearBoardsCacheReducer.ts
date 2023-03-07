import { BoardsPageState } from "..";

export const clearBoardsCacheReducer = (state: BoardsPageState) => {
  state.boardsCache = {};
};
