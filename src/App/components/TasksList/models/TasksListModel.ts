import { TaskModel } from "App/components/Task/models/TaskModel";

export interface TasksListModel {
  id: string;
  title: string;
  tasks: Array<TaskModel>;
}
