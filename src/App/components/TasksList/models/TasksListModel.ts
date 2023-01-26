import { TaskModel } from "App/components/Task/models/TaskModel";
import { generateId } from "shared/utils/generateId";

interface TasksListModelConfig {
  title?: string;
  tasks?: TaskModel[];
}

export class TasksListModel {
  public readonly id: string = generateId();

  public title: string;
  public tasks: TaskModel[];

  constructor({ title = "", tasks = [] }: TasksListModelConfig) {
    this.title = title;
    this.tasks = tasks;
  }
}
