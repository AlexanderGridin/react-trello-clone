import { DraggedItem } from "drag-and-drop/models/DraggedItem";

import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";

import { DraggedItemType } from "App/enums/DraggedItemType";
import { BoardViewModel } from "../Board/models";

export type AppDraggedItem =
  | DraggedItem<DraggedItemType.TasksList, TasksListViewModel>
  | DraggedItem<DraggedItemType.Task, TaskViewModel>
  | DraggedItem<DraggedItemType.Board, BoardViewModel>;
