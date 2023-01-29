import { BoardModel } from "App/components/Board/models/BoardModel";
import { TasksListModel } from "App/components/TasksList/models/TasksListModel";
import { AppDraggedItem } from "App/models/AppDraggedItem";

export interface AppState {
  boards: BoardModel[];
  tasksLists: TasksListModel[];
  draggedItem: AppDraggedItem | null;
}
