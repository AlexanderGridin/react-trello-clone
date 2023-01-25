import { TasksListModel } from "App/components/TasksList/models/TasksListModel";
import { AppDraggedItem } from "App/models/AppDraggedItem";

export interface AppState {
  tasksLists: Array<TasksListModel>;
  draggedItem: AppDraggedItem | null;
}
