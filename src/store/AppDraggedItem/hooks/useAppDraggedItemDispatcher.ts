import { useDispatch } from "store/hooks/useDispatch";
import { TAppDraggedItem } from "entities/AppDraggedItem/types";

import { setAppDraggedItem as setAppDraggedItemAction } from "..";

export const useAppDraggedItemDispatcher = () => {
  const dispatch = useDispatch();

  const setAppDraggedItem = (item: TAppDraggedItem | null) => dispatch(setAppDraggedItemAction({ draggedItem: item }));

  return { setAppDraggedItem };
};
