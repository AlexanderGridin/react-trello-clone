import { AppDraggedItem } from "App/models/AppDraggedItem";
import { ActionType } from "../enums/ActionType.enum";
import { createAction } from "../utils/createAction";

interface SetDraggedItemPayload {
  item: AppDraggedItem | null;
}

export const setDraggedItem = (item: AppDraggedItem | null) => {
  const { SetDraggedItem } = ActionType;
  const payload: SetDraggedItemPayload = {
    item,
  };

  return createAction<typeof SetDraggedItem, SetDraggedItemPayload>(
    SetDraggedItem,
    payload
  );
};

export type SetDraggedItemAction = ReturnType<typeof setDraggedItem>;
