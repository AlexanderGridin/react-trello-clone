import { Task } from "shared/models/Task";

export interface TasksListModel {
  id: string;
  title: string;
  tasks: Array<Task>;
}
