import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { TasksListItem } from "App/widgets/TasksList/components/TasksListItems/components/TasksListItem";
import { TasksList } from "App/widgets/TasksList/TasksList";

interface ListOfTasksListsDraggedItemProps {
  item: AppDraggedItem;
}

export const ListOfTasksListsDraggedItem = ({
  item,
}: ListOfTasksListsDraggedItemProps) => {
  switch (item.type) {
    case DraggedItemType.TasksList:
      const list: TasksListViewModel = item.data;
      return <TasksList list={list} isDragPreview isShowAddTask />;

    case DraggedItemType.Task:
      const task: TaskViewModel = item.data;
      return <TasksListItem task={task} isDragPreview />;

    default:
      return null;
  }
};
