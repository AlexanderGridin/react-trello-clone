import { PayloadAction } from "@reduxjs/toolkit";

import { TAppDraggedItem } from "entities/AppDraggedItem/types";

import { IAppDraggedItemState } from "..";

interface IPayload {
  draggedItem: TAppDraggedItem | null;
}

export const setAppDraggedItemReducer = (state: IAppDraggedItemState, action: PayloadAction<IPayload>): void => {
  state.draggedItem = action.payload.draggedItem;
};
