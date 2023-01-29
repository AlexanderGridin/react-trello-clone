import { TasksListModel } from "App/components/TasksList/models/TasksListModel";
import { BoardModel } from "./BoardModel";

export interface BoardWithTasksListsModel extends BoardModel {
  tasksLists: TasksListModel[];
}
