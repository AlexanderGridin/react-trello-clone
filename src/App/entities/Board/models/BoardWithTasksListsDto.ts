import { mapTasksListDtoToViewModel } from "App/entities/TasksList/mappers";
import { TasksListDto } from "App/entities/TasksList/models";
import { parseTasksLists } from "../utils/parseTasksLists";
import { BoardWithTasksListsViewModel } from "./BoardWithTasksListsViewModel";

export class BoardWithTasksListsDto {
  public _id!: string;
  public title!: string;
  public tasksLists: TasksListDto[] = [];
  public isFavorite = false;

  static toViewModel(source: BoardWithTasksListsDto): BoardWithTasksListsViewModel {
    const { pinnedTasksLists, unpinnedTasksLists } = parseTasksLists<TasksListDto>(source.tasksLists ?? []);

    return {
      id: source._id,
      title: source.title,
      tasksLists: unpinnedTasksLists.map(mapTasksListDtoToViewModel),
      pinnedTasksLists: pinnedTasksLists.map(mapTasksListDtoToViewModel),
      isFavorite: source.isFavorite,
    };
  }
}
