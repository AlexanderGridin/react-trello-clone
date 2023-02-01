import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { TaskModel } from "../models/TaskModel";

export const mapTaskToDraggedItem = (task: TaskModel): AppDraggedItem => ({
  id: task.id,
  type: DraggedItemType.Task,
  acceptType: DraggedItemType.Task,
  data: task,
});
