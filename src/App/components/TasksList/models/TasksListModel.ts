import { TaskModel } from "App/components/Task/models/TaskModel";
import { generateId } from "shared/utils/generateId";

interface TasksListModelConfig {
  id?: string;
  title?: string;
  boardId?: string;
  tasks?: TaskModel[];
}

export class TasksListModel {
  public readonly id: string;

  public title: string;
  public boardId: string;
  public tasks: TaskModel[];

  constructor({
    id = generateId(),
    title = "",
    boardId = "",
    tasks = [],
  }: TasksListModelConfig) {
    this.id = id;
    this.title = title;
    this.boardId = boardId;
    this.tasks = tasks;
  }
}
