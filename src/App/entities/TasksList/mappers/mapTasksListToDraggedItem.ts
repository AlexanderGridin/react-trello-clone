import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { TasksListModel } from "App/entities/TasksList/TasksListModel";
import { DraggedItemType } from "App/enums/DraggedItemType";

export const mapTasksListToDraggedItem = (
  list: TasksListModel
): AppDraggedItem => ({
  id: list.id,
  type: DraggedItemType.TasksList,
  acceptType: [DraggedItemType.Task, DraggedItemType.TasksList],
  data: list,
});
