import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { DraggedItemType } from "App/enums/DraggedItemType";

export const mapTaskToDraggedItem = (task: TaskViewModel): AppDraggedItem => ({
  id: task.id,
  type: DraggedItemType.Task,
  acceptType: DraggedItemType.Task,
  data: task,
});
