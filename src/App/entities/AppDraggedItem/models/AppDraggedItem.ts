import { IDraggedItem } from "drag-and-drop/models/DraggedItem";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { TasksListViewModel } from "App/entities/TasksList/models";
import { TaskViewModel } from "App/entities/Task/models";
import { BoardViewModel } from "App/entities/Board/models";

export type TAppDraggedItem =
  | IDraggedItem<DraggedItemType.TasksList, TasksListViewModel>
  | IDraggedItem<DraggedItemType.Task, TaskViewModel>
  | IDraggedItem<DraggedItemType.Board, BoardViewModel>;
