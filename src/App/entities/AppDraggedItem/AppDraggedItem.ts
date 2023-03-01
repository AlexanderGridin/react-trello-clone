import { DraggedItem } from "drag-and-drop/models/DraggedItem";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { BoardViewModel } from "../Board/models";
import { TaskViewModel } from "../Task/models";
import { TasksListViewModel } from "../TasksList/models";

export type AppDraggedItem =
  | DraggedItem<DraggedItemType.TasksList, TasksListViewModel>
  | DraggedItem<DraggedItemType.Task, TaskViewModel>
  | DraggedItem<DraggedItemType.Board, BoardViewModel>;
