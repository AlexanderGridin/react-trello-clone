import { UserDto } from "App/entities/User/models";
import { TTaskPriority } from "App/types/TaskPriority";
import { TaskViewModel } from "./TaskViewModel";

export class TaskDto {
  public _id!: string;
  public content!: string;
  public listId!: string;
  public boardId!: string;
  public priority: TTaskPriority = "regular";
  public user!: UserDto;

  static toViewModel(source: TaskDto): TaskViewModel {
    return {
      id: source._id,
      boardId: source.boardId,
      listId: source.listId,
      title: source.content,
      priority: source.priority,
      user: UserDto.toViewModel(source.user),
      isEditing: false,
    };
  }
}
