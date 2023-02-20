import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { useAppState } from "App/state/hooks/useAppState";
import { AppDraggedItemAction } from "..";
import { createSetAppDraggedItemAction } from "../actions/createSetAppDraggedItemAction";

export const useAppDraggedItemDispatcher = () => {
  const { dispatch } = useAppState();

  const dispatchForModule = (action: AppDraggedItemAction) =>
    dispatch({
      module: "AppDraggedItem",
      ...action,
    });

  const setAppDraggedItem = (item: AppDraggedItem | null) => dispatchForModule(createSetAppDraggedItemAction(item));

  return { setAppDraggedItem };
};
