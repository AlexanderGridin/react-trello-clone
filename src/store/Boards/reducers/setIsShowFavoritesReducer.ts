import { PayloadAction } from "@reduxjs/toolkit";
import { IBoardsState } from "..";

interface Payload {
  isShowFavorites: boolean;
}

export const setIsShowFavoritesReducer = (state: IBoardsState, action: PayloadAction<Payload>) => {
  state.isShowFavorites = action.payload.isShowFavorites;
};
