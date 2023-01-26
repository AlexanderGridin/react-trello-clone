import { AppDraggedItem } from "App/models/AppDraggedItem";
import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "shared/state/utils/createAction";

interface SetDraggedItemPayload {
  item: AppDraggedItem | null;
}

export const setDraggedItem = (item: AppDraggedItem | null) => {
  const { SetDraggedItem } = AppActionType;
  const payload: SetDraggedItemPayload = {
    item,
  };

  return createAction<typeof SetDraggedItem, SetDraggedItemPayload>(
    SetDraggedItem,
    payload
  );
};

export type SetDraggedItemAction = ReturnType<typeof setDraggedItem>;
