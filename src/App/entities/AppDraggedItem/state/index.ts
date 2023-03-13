import { TSetAppDraggedItemAction } from "./action-creators/createSetAppDraggedItemAction";

export * from "./hooks/useAppDraggedItemDispatcher";
export * from "./appDraggedItemReducer";

export type TAppDraggedItemAction = TSetAppDraggedItemAction;

export type TAppDraggedItemModuleAction = {
  module: "AppDraggedItem";
} & TAppDraggedItemAction;
