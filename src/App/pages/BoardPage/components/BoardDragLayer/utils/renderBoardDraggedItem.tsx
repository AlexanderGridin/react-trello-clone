import { TaskModel } from "App/components/Task/models/TaskModel";
import { Task } from "App/components/Task/Task";
import { TasksListModel } from "App/components/TasksList/models/TasksListModel";
import { TasksListDragPreview } from "App/components/TasksList/TasksListDragPreview";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { AppDraggedItem } from "App/models/AppDraggedItem";
import { Card } from "shared/components/Card/Card";

export const renderBoardDraggedItem = (item: AppDraggedItem) => {
  switch (item.type) {
    case DraggedItemType.TasksList:
      const draggedList: TasksListModel = item.data;
      return <TasksListDragPreview list={draggedList} />;

    case DraggedItemType.Task:
      const draggedTask: TaskModel = item.data;
      return (
        <Card className="drag-preview">
          <Task task={draggedTask} onRemove={() => {}}></Task>
        </Card>
      );
  }
};
