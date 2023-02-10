import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { ArrayUtilConfigWithArrayItem } from "shared/utils/array/models/ArrayUtilConfigWithArrayItem";
import { moveItemAfterArrayItem } from "shared/utils/array/moveItemAfterArrayItem/moveItemAfterArrayItem";
import { moveItemBeforeArrayItem } from "shared/utils/array/moveItemBeforeArrayItem/moveItemBeforeArrayItem";

export const moveTasksLists = (
  lists: TasksListViewModel[],
  listToMove: TasksListViewModel,
  listToReplace: TasksListViewModel
) => {
  const listToMoveIndex = lists.findIndex(
    ({ id }: TasksListViewModel) => id === listToMove.id
  );
  const listToReplaceIndex = lists.findIndex(
    ({ id }: TasksListViewModel) => id === listToReplace.id
  );

  const movingConfig: ArrayUtilConfigWithArrayItem<TasksListViewModel> = {
    array: lists,
    item: listToMove,
    arrayItem: listToReplace,
    uniqueKey: "id",
  };

  return listToMoveIndex < listToReplaceIndex
    ? moveItemAfterArrayItem<TasksListViewModel>(movingConfig)
    : moveItemBeforeArrayItem<TasksListViewModel>(movingConfig);
};
