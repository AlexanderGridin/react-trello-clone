import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { useAppState } from "App/state/hooks/useAppState";
import { setAppDraggedItem } from "../actions/setAppDraggedItem";

export const useAppDraggedItemDispatchers = () => {
  const { dispatch } = useAppState();
  const dispatchSetAppDraggedItem = (item: AppDraggedItem | null) =>
    dispatch(setAppDraggedItem(item));

  return { dispatchSetAppDraggedItem };
};
