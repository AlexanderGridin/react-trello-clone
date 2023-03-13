import { DraggedItem } from "drag-and-drop/models/DraggedItem";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { TasksListViewModel } from "App/entities/TasksList/models";
import { TaskViewModel } from "App/entities/Task/models";
import { BoardViewModel } from "App/entities/Board/models";

export type TAppDraggedItem =
  | DraggedItem<DraggedItemType.TasksList, TasksListViewModel>
  | DraggedItem<DraggedItemType.Task, TaskViewModel>
  | DraggedItem<DraggedItemType.Board, BoardViewModel>;
