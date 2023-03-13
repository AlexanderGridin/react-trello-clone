import { useAppState } from "App/state/hooks/useAppState";
import { TAppDraggedItemAction } from "..";
import { TAppDraggedItem } from "../../models";
import { createSetAppDraggedItemAction } from "../action-creators/createSetAppDraggedItemAction";

export const useAppDraggedItemDispatcher = () => {
  const { dispatch } = useAppState();

  const dispatchForModule = (action: TAppDraggedItemAction) =>
    dispatch({
      module: "AppDraggedItem",
      ...action,
    });

  const setAppDraggedItem = (item: TAppDraggedItem | null) => dispatchForModule(createSetAppDraggedItemAction(item));

  return { setAppDraggedItem };
};
