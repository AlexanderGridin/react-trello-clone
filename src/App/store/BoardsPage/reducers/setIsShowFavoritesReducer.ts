import { PayloadAction } from "@reduxjs/toolkit";
import { BoardsPageState } from "..";

interface Payload {
  isShowFavorites: boolean;
}

export const setIsShowFavoritesReducer = (state: BoardsPageState, action: PayloadAction<Payload>) => {
  state.isShowFavorites = action.payload.isShowFavorites;
};
