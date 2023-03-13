import { IAction } from "App/state/models/IAction";
import { TAppDraggedItem } from "../../models";
import { AppDraggedItemActionType } from "../AppDraggedItemActionType.enum";

interface SetAppDraggedItemPayload {
  item: TAppDraggedItem | null;
}

export type TSetAppDraggedItemAction = IAction<AppDraggedItemActionType.SetAppDraggedItem, SetAppDraggedItemPayload>;

export const createSetAppDraggedItemAction = (item: TAppDraggedItem | null): TSetAppDraggedItemAction => ({
  type: AppDraggedItemActionType.SetAppDraggedItem,
  payload: { item },
});
