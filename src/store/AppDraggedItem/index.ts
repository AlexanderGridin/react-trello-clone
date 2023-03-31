import { createSlice } from "@reduxjs/toolkit";

import { TAppDraggedItem } from "entities/AppDraggedItem/types";

import { setAppDraggedItemReducer } from "./reducers";

export interface IAppDraggedItemState {
  draggedItem: TAppDraggedItem | null;
}

const initialState: IAppDraggedItemState = {
  draggedItem: null,
};

const appDraggedItemSlice = createSlice({
  name: "[DRAGGED_ITEM]",
  initialState,
  reducers: {
    setAppDraggedItem: setAppDraggedItemReducer,
  },
});

export const { setAppDraggedItem } = appDraggedItemSlice.actions;
export const appDraggedItemReducer = appDraggedItemSlice.reducer;
