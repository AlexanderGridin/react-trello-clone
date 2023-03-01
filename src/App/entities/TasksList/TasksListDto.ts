import { TaskDto } from "../Task/models";

export interface TasksListDto {
  _id: string;
  boardId: string;
  title: string;
  tasks: TaskDto[];
  isPinned: boolean;
}
