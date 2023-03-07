import { PayloadAction } from "@reduxjs/toolkit";
import { BoardsState } from "..";

interface Payload {
  isShowFavorites: boolean;
}

export const setIsShowFavoritesReducer = (state: BoardsState, action: PayloadAction<Payload>) => {
  state.isShowFavorites = action.payload.isShowFavorites;
};
