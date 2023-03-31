import { TPriority } from "App/types";

export interface ITaskUpdateDtoConfig {
  content: string;
  priority: TPriority;
  listId: string;
  boardId: string;
}

export class TaskUpdateDto {
  public content!: string;
  public priority: TPriority = "regular";
  public listId!: string;
  public boardId!: string;

  constructor(config?: ITaskUpdateDtoConfig) {
    if (!config) {
      return;
    }

    Object.assign(this, config);
  }
}
