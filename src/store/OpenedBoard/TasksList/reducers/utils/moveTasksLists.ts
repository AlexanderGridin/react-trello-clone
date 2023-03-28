import { TasksListViewModel } from "App/entities/TasksList/models";
import { moveItemAfterArrayItem, moveItemBeforeArrayItem } from "shared/utils/array";
import { ArrayUtilConfigWithArrayItem } from "shared/utils/array/models";

export const moveTasksLists = (
  lists: TasksListViewModel[],
  listToMove: TasksListViewModel,
  listToReplace: TasksListViewModel
) => {
  const listToMoveIndex = lists.findIndex(({ id }: TasksListViewModel) => id === listToMove.id);
  const listToReplaceIndex = lists.findIndex(({ id }: TasksListViewModel) => id === listToReplace.id);

  const movingConfig: ArrayUtilConfigWithArrayItem<TasksListViewModel> = {
    array: lists,
    item: listToMove,
    arrayItem: listToReplace,
    uniqueKey: "id",
  };

  const updatedLists =
    listToMoveIndex < listToReplaceIndex
      ? moveItemAfterArrayItem<TasksListViewModel>(movingConfig)
      : moveItemBeforeArrayItem<TasksListViewModel>(movingConfig);

  return updatedLists.map((list) => (list.id === listToReplace.id ? { ...list, ...listToReplace } : { ...list }));
};
