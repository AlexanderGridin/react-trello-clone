import { DraggedItem } from "drag-and-drop/models/DraggedItem";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { BoardViewModel } from "../Board/models";
import { TaskViewModel } from "../Task/models";

export type AppDraggedItem =
  | DraggedItem<DraggedItemType.TasksList, TasksListViewModel>
  | DraggedItem<DraggedItemType.Task, TaskViewModel>
  | DraggedItem<DraggedItemType.Board, BoardViewModel>;
