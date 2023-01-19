import { useAppState } from "App/state/hooks/useAppState";
import { TasksListModel } from "../models/TasksListModel";
import { useItemDrag } from "App/hooks/useItemDrag";
import { useRef } from "react";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { moveList } from "App/state/actions/list/moveList";
import { AppDraggedItem } from "App/models/AppDraggedItem";
import { useItemDrop } from "App/hooks/useItemDrop";

export const useTasksListDragAndDrop = (list: TasksListModel) => {
  const { dispatch } = useAppState();
  const draggedList: AppDraggedItem = {
    id: list.id,
    type: DraggedItemType.TasksList,
    data: { ...list },
  };

  const { drag, isDragging } = useItemDrag({ ...draggedList });
  const { drop } = useItemDrop({
    ...draggedList,
    onDrop: (item) => {
      if (item.type === DraggedItemType.TasksList) {
        dispatch(moveList(item.data, list));
      }
    },
  });

  const dragAndDropRef = useRef<HTMLDivElement>(null);
  drag(drop(dragAndDropRef));

  return { dragAndDropRef, isDragging };
};
