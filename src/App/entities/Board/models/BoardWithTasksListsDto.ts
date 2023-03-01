import { TasksListDto } from "App/entities/TasksList/models";

export interface BoardWithTasksListsDto {
  _id: string;
  title: string;
  tasksLists?: TasksListDto[];
  isFavorite: boolean;
}
