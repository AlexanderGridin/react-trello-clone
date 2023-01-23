import { DndCard } from "App/components/DndCard/DndCard";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { AppDraggedItem } from "App/models/AppDraggedItem";
import { TasksList } from "../../TasksList/TasksList";

export const renderBoardDraggedItem = (item: AppDraggedItem) => {
  switch (item.type) {
    case DraggedItemType.TasksList:
      return <TasksList list={item.data} isDragPreview></TasksList>;

    case DraggedItemType.Card:
      return (
        <DndCard
          id={item.data.id}
          onRemove={item.data.onRemove}
          onDrop={item.data.onDrop}
        >
          {item.data.children}
        </DndCard>
      );
  }
};
