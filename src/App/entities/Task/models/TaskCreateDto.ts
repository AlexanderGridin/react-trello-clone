import { TPriority } from "App/types";

export interface ITaskCreateDtoConfig {
  content: string;
  priority: TPriority;
  boardId: string;
  listId: string;
  user: string;
}

export class TaskCreateDto {
  public content!: string;
  public priority!: TPriority;
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
