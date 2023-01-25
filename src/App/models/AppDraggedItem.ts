import { DraggedItem } from "drag-and-drop/models/DraggedItem";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { TasksListModel } from "App/components/TasksList/models/TasksListModel";
import { TaskModel } from "App/components/Task/models/TaskModel";

export type AppDraggedItem =
  | DraggedItem<DraggedItemType.TasksList, TasksListModel>
  | DraggedItem<DraggedItemType.Task, TaskModel>;
