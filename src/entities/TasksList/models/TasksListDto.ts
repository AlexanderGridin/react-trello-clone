import { TaskDto } from "entities/Task/models";

import { TasksListViewModel } from "./TasksListViewModel";

export class TasksListDto {
  public _id!: string;
  public boardId!: string;
  public title!: string;
  public rank!: number;
  public tasks: TaskDto[] = [];
  public isPinned = false;

  static toViewModel(source: TasksListDto): TasksListViewModel {
    return {
      id: source._id,
      boardId: source.boardId,
      title: source.title,
      rank: source.rank,
      tasks: source.tasks.map(TaskDto.toViewModel),
      isPinned: source.isPinned,
      isEditing: false,
    };
  }
}
