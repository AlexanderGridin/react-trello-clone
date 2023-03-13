import { TAppDraggedItem } from "App/entities/AppDraggedItem/models";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { TasksListViewModel } from "../models";

export const mapTasksListToDraggedItem = (list: TasksListViewModel): TAppDraggedItem => ({
  id: list.id,
  type: DraggedItemType.TasksList,
  acceptType: [DraggedItemType.Task, DraggedItemType.TasksList],
  data: list,
});
