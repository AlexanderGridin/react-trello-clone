import { Task } from "App/models/Task";

export interface TasksListModel {
  id: string;
  title: string;
  tasks: Array<Task>;
}
