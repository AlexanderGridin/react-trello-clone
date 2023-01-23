import { DraggedItem } from "drag-and-drop/models/DraggedItem";
import { TasksListModel } from "App/components/Board/components/TasksList/models/TasksListModel";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { DndCardProps } from "App/components/DndCard/DndCard";

export type AppDraggedItem =
  | DraggedItem<DraggedItemType.TasksList, TasksListModel>
  | DraggedItem<DraggedItemType.Card, DndCardProps>;
