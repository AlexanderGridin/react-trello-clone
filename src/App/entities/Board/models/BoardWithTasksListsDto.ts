import { TasksListDto } from "App/entities/TasksList/TasksListDto";

export interface BoardWithTasksListsDto {
  _id: string;
  title: string;
  tasksLists?: TasksListDto[];
  isFavorite: boolean;
}
