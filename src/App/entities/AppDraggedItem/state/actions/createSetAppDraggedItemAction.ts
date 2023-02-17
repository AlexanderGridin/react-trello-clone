import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { AppActionType } from "App/state/enums/AppActionType.enum";
import { Action } from "App/state/models/Action";

interface SetAppDraggedItemPayload {
  item: AppDraggedItem | null;
}

export type SetAppDraggedItemAction = Action<
  AppActionType.SetAppDraggedItem,
  SetAppDraggedItemPayload
>;

export const createSetAppDraggedItemAction = (
  item: AppDraggedItem | null
): SetAppDraggedItemAction => ({
  type: AppActionType.SetAppDraggedItem,
  payload: { item },
});
