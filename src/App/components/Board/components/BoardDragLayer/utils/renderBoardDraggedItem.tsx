import { Task } from "App/components/Task/Task";
import { TasksListDragPreview } from "App/components/TasksList/TasksListDragPreview";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { AppDraggedItem } from "App/models/AppDraggedItem";
import { Card } from "shared/components/Card/Card";

export const renderBoardDraggedItem = (item: AppDraggedItem) => {
  switch (item.type) {
    case DraggedItemType.TasksList:
      return <TasksListDragPreview list={item.data} />;

    case DraggedItemType.Task:
      return (
        <Card className="drag-preview">
          <Task content={item.data.text} onRemove={() => {}}></Task>
        </Card>
      );
  }
};
