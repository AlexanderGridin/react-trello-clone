import { generateId } from "shared/utils/generateId";
import { TaskViewModel } from "App/entities/Task/TaskViewModel";

interface TasksListModelConfig {
  id?: string;
  title?: string;
  boardId?: string;
  tasks?: TaskViewModel[];
}

export class TasksListModel {
  public readonly id: string;

  public title: string;
  public boardId: string;
  public tasks: TaskViewModel[];
  public isPinned = false;

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
