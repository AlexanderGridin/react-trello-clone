import { UserDto } from "App/entities/User/models";
import { TPriority } from "App/types";
import { TaskViewModel } from "./TaskViewModel";

export class TaskDto {
  public _id!: string;
  public content!: string;
  public listId!: string;
  public boardId!: string;
  public priority: TPriority = "regular";
  public user!: UserDto;
  public rank!: number;

  static toViewModel(source: TaskDto): TaskViewModel {
    return {
      id: source._id,
      boardId: source.boardId,
      listId: source.listId,
      title: source.content,
      priority: source.priority,
      user: UserDto.toViewModel(source.user),
      rank: source.rank,
      isEditing: false,
    };
  }
}
