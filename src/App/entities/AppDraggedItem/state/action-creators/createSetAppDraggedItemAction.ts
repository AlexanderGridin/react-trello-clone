import { Action } from "App/state/models/Action";
import { TAppDraggedItem } from "../../models";
import { AppDraggedItemActionType } from "../AppDraggedItemActionType.enum";

interface SetAppDraggedItemPayload {
  item: TAppDraggedItem | null;
}

export type TSetAppDraggedItemAction = Action<AppDraggedItemActionType.SetAppDraggedItem, SetAppDraggedItemPayload>;

export const createSetAppDraggedItemAction = (item: TAppDraggedItem | null): TSetAppDraggedItemAction => ({
  type: AppDraggedItemActionType.SetAppDraggedItem,
  payload: { item },
});
