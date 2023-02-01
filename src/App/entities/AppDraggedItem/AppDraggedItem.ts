import { DraggedItem } from "drag-and-drop/models/DraggedItem";

import { TaskModel } from "App/entities/Task/TaskModel";
import { BoardModel } from "App/entities/Board/BoardModel";

import { DraggedItemType } from "App/enums/DraggedItemType";

import { TasksListModel } from "App/components/TasksList/models/TasksListModel";

export type AppDraggedItem =
  | DraggedItem<DraggedItemType.TasksList, TasksListModel>
  | DraggedItem<DraggedItemType.Task, TaskModel>
  | DraggedItem<DraggedItemType.Board, BoardModel>;
