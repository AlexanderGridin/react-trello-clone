export interface ITasksListUpdateDtoConfig {
  title: string;
  boardId: string;
  isPinned: boolean;
}

export class TasksListUpdateDto {
  public title!: string;
  public boardId!: string;
  public isPinned = false;

  constructor(config?: ITasksListUpdateDtoConfig) {
    if (!config) {
      return;
    }

    Object.assign(this, config);
  }
}
