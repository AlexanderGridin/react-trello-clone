import { AppDraggedItem } from "App/models/AppDraggedItem";
import { useAppState } from "App/state/hooks/useAppState";
import { setDraggedItem } from "../actions/setDraggedItem";

export const useDraggedItemDispatchers = () => {
  const { dispatch } = useAppState();
  const dispatchSetDraggedItem = (item: AppDraggedItem | null) =>
    dispatch(setDraggedItem(item));

  return { dispatchSetDraggedItem };
};
