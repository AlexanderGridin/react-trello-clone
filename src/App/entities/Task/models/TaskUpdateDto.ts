import { TTaskPriority } from "App/types/TaskPriority";

export interface ITaskUpdateDtoConfig {
  content: string;
  priority: TTaskPriority;
  listId: string;
  boardId: string;
}

export class TaskUpdateDto {
  public content!: string;
  public priority: TTaskPriority = "regular";
  public listId!: string;
  public boardId!: string;

  constructor(config?: ITaskUpdateDtoConfig) {
    if (!config) {
      return;
    }

    Object.assign(this, config);
  }
}
