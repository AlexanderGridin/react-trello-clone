import { Task } from "shared/models/Task.model";

export interface TasksList {
  id: string;
  title: string;
  tasks: Array<Task>;
}
