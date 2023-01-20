import { AppDraggedItem } from "App/models/AppDraggedItem";
import { ActionType } from "App/state/enums/ActionType.enum";
import { createAction } from "App/state/utils/createAction";

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
