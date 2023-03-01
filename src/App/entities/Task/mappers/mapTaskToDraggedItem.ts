import { AppDraggedItem } from "App/entities/AppDraggedItem/models";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { TaskViewModel } from "../models";

export const mapTaskToDraggedItem = (task: TaskViewModel): AppDraggedItem => ({
  id: task.id,
  type: DraggedItemType.Task,
  acceptType: DraggedItemType.Task,
  data: task,
});
