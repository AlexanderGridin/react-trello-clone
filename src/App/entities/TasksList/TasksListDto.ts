import { TaskDto } from "../Task/TaskDto";

export interface TasksListDto {
  _id: string;
  boardId: string;
  title: string;
  tasks: TaskDto[];
  isPinned: boolean;
}
