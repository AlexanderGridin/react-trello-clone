import { PayloadAction } from "@reduxjs/toolkit";
import { IBoardsPageState } from "..";

interface Payload {
  isShowFavorites: boolean;
}

export const setIsShowFavoritesReducer = (state: IBoardsPageState, action: PayloadAction<Payload>) => {
  state.isShowFavorites = action.payload.isShowFavorites;
};
