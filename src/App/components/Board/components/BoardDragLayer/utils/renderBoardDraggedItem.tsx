import { DraggedItemType } from "App/enums/DraggedItemType";
import { AppDraggedItem } from "App/models/AppDraggedItem";
import { TasksList } from "../../TasksList/TasksList";

export const renderBoardDraggedItem = (item: AppDraggedItem) => {
  switch (item.type) {
    case DraggedItemType.TasksList:
      return <TasksList list={item.data} isDragPreview></TasksList>;
  }
};
