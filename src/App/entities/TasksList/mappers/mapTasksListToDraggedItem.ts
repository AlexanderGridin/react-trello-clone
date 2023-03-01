import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { TasksListViewModel } from "../models";

export const mapTasksListToDraggedItem = (list: TasksListViewModel): AppDraggedItem => ({
  id: list.id,
  type: DraggedItemType.TasksList,
  acceptType: [DraggedItemType.Task, DraggedItemType.TasksList],
  data: list,
});
