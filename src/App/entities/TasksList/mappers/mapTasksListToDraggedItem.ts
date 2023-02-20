import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { DraggedItemType } from "App/enums/DraggedItemType";

export const mapTasksListToDraggedItem = (list: TasksListViewModel): AppDraggedItem => ({
  id: list.id,
  type: DraggedItemType.TasksList,
  acceptType: [DraggedItemType.Task, DraggedItemType.TasksList],
  data: list,
});
