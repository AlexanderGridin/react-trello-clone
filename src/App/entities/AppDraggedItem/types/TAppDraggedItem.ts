import { IDraggedItem } from "drag-and-drop/models";
import { DraggedItemType } from "drag-and-drop/enums";
import { TasksListViewModel } from "App/entities/TasksList/models";
import { TaskViewModel } from "App/entities/Task/models";
import { BoardViewModel } from "App/entities/Board/models";

export type TAppDraggedItem =
  | IDraggedItem<DraggedItemType.TasksList, TasksListViewModel>
  | IDraggedItem<DraggedItemType.Task, TaskViewModel>
  | IDraggedItem<DraggedItemType.Board, BoardViewModel>;
