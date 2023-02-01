import { DraggedItem } from "drag-and-drop/models/DraggedItem";

import { TaskModel } from "App/entities/Task/TaskModel";
import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { TasksListModel } from "App/entities/TasksList/TasksListModel";

import { DraggedItemType } from "App/enums/DraggedItemType";

export type AppDraggedItem =
  | DraggedItem<DraggedItemType.TasksList, TasksListModel>
  | DraggedItem<DraggedItemType.Task, TaskModel>
  | DraggedItem<DraggedItemType.Board, BoardViewModel>;
