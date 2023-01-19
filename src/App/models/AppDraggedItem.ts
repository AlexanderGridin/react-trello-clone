import { DraggedItem } from "drag-and-drop/models/DraggedItem";
import { TasksListModel } from "App/components/Board/components/TasksList/models/TasksListModel";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { Task } from "./Task";

export type AppDraggedItem =
  | DraggedItem<DraggedItemType.TasksList, TasksListModel>
  | DraggedItem<DraggedItemType.Task, Task>;
