import { useAppDragLayer } from "App/hooks/useAppDragLayer";
import { DragLayer } from "drag-and-drop/components/DragLayer";
import { DragPreviewWrapper } from "drag-and-drop/components/DragPreviewWrapper";
import { ListOfTasksListsDraggedItem } from "./ListOfTasksListsDraggedItem";
import style from "../ListOfTasksLists.module.css";

export const ListOfTasksListsDragLayer = () => {
  const { draggedItem, offset } = useAppDragLayer();

  if (!draggedItem || !offset) {
    return null;
  }

  return (
    <DragLayer>
      <DragPreviewWrapper position={offset}>
        <div className={style.cell}>
          <ListOfTasksListsDraggedItem item={draggedItem} />
        </div>
      </DragPreviewWrapper>
    </DragLayer>
  );
};
