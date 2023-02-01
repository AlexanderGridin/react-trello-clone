import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { TaskModel } from "App/entities/Task/TaskModel";
import { DraggedItemType } from "App/enums/DraggedItemType";

export const mapTaskToDraggedItem = (task: TaskModel): AppDraggedItem => ({
  id: task.id,
  type: DraggedItemType.Task,
  acceptType: DraggedItemType.Task,
  data: task,
});
