import { TasksListItem } from "App/components/TasksList/components/TasksListItems/components/TasksListItem";
import { TasksListModel } from "App/components/TasksList/models/TasksListModel";
import { TasksList } from "App/components/TasksList/TasksList";
import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { TaskModel } from "App/entities/Task/TaskModel";
import { DraggedItemType } from "App/enums/DraggedItemType";

interface BoardPageDraggedItemProps {
  item: AppDraggedItem;
}

export const BoardPageDraggedItem = ({ item }: BoardPageDraggedItemProps) => {
  switch (item.type) {
    case DraggedItemType.TasksList:
      const list: TasksListModel = item.data;
      return <TasksList list={list} isDragPreview />;

    case DraggedItemType.Task:
      const task: TaskModel = item.data;
      return <TasksListItem task={task} isDragPreview />;

    default:
      return null;
  }
};
