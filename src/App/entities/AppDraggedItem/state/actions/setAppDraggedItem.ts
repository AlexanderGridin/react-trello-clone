import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "App/state/utils/createAction";

interface SetAppDraggedItemPayload {
  item: AppDraggedItem | null;
}

export const setAppDraggedItem = (item: AppDraggedItem | null) => {
  const { SetAppDraggedItem } = AppActionType;
  const payload: SetAppDraggedItemPayload = {
    item,
  };

  return createAction<typeof SetAppDraggedItem, SetAppDraggedItemPayload>(
    SetAppDraggedItem,
    payload
  );
};

export type SetAppDraggedItemAction = ReturnType<typeof setAppDraggedItem>;
