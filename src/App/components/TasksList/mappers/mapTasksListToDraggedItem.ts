import { DraggedItemType } from "App/enums/DraggedItemType";
import { AppDraggedItem } from "App/models/AppDraggedItem";
import { TasksListModel } from "../models/TasksListModel";

export const mapTasksListToDraggedItem = (
  list: TasksListModel
): AppDraggedItem => ({
  id: list.id,
  type: DraggedItemType.TasksList,
  acceptType: [DraggedItemType.Task, DraggedItemType.TasksList],
  data: list,
});
