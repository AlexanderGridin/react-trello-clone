import { Action } from "App/state/models/Action";
import { AppDraggedItem } from "../../models";
import { AppDraggedItemActionType } from "../AppDraggedItemActionType.enum";

interface SetAppDraggedItemPayload {
  item: AppDraggedItem | null;
}

export type SetAppDraggedItemAction = Action<AppDraggedItemActionType.SetAppDraggedItem, SetAppDraggedItemPayload>;

export const createSetAppDraggedItemAction = (item: AppDraggedItem | null): SetAppDraggedItemAction => ({
  type: AppDraggedItemActionType.SetAppDraggedItem,
  payload: { item },
});
