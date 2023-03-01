import { mapTasksListDtoToViewModel } from "App/entities/TasksList/mappers/mapTasksListDtoToViewModel";
import { TasksListDto } from "App/entities/TasksList/TasksListDto";
import { BoardWithTasksListsDto, BoardWithTasksListsViewModel } from "../models";
import { parseTasksLists } from "../utils/parseTasksLists";

export const mapBoardWithTasksListsDtoToViewModel = (source: BoardWithTasksListsDto): BoardWithTasksListsViewModel => {
  const { pinnedTasksLists, unpinnedTasksLists } = parseTasksLists<TasksListDto>(source.tasksLists ?? []);

  return {
    ...new BoardWithTasksListsViewModel({}),
    id: source._id,
    title: source.title,
    tasksLists: unpinnedTasksLists.map(mapTasksListDtoToViewModel),
    pinnedTasksLists: pinnedTasksLists.map(mapTasksListDtoToViewModel),
    isFavorite: source.isFavorite,
  };
};
