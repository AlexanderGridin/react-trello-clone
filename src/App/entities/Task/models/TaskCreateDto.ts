import { TTaskPriority } from "App/types/TaskPriority";

export interface ITaskCreateDtoConfig {
  content: string;
  priority: TTaskPriority;
  boardId: string;
  listId: string;
  user: string;
}

export class TaskCreateDto {
  public content!: string;
  public priority!: TTaskPriority;
  public boardId!: string;
  public listId!: string;
  public user!: string;

  constructor(config?: ITaskCreateDtoConfig) {
    if (!config) {
      return;
    }

    Object.assign(this, config);
  }
}
