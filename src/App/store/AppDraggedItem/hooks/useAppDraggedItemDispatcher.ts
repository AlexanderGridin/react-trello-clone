import { TAppDraggedItem } from "App/entities/AppDraggedItem/types";
import { useDispatch } from "App/store/hooks/useDispatch";
import { setAppDraggedItem as setAppDraggedItemAction } from "..";

export const useAppDraggedItemDispatcher = () => {
  const dispatch = useDispatch();

  const setAppDraggedItem = (item: TAppDraggedItem | null) => dispatch(setAppDraggedItemAction({ draggedItem: item }));

  return { setAppDraggedItem };
};
