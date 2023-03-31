import { IDraggedItem } from "drag-and-drop/models";
import { TaskViewModel } from "entities/Task/models";
import { BoardViewModel } from "entities/Board/models";
import { DraggedItemType } from "drag-and-drop/enums";
import { TasksListViewModel } from "entities/TasksList/models";

export type TAppDraggedItem =
  | IDraggedItem<DraggedItemType.TasksList, TasksListViewModel>
  | IDraggedItem<DraggedItemType.Task, TaskViewModel>
  | IDraggedItem<DraggedItemType.Board, BoardViewModel>;
