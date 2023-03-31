export interface ITasksListCreateDtoConfig {
  title: string;
  boardId: string;
  isPinned: boolean;
}

export class TasksListCreateDto {
  public title!: string;
  public boardId!: string;
  public isPinned = false;

  constructor(config?: ITasksListCreateDtoConfig) {
    if (!config) {
      return;
    }

    Object.assign(this, config);
  }
}
