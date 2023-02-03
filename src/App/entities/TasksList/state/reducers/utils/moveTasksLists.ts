import { TasksListModel } from "App/entities/TasksList/TasksListModel";
import { ArrayUtilConfigWithArrayItem } from "shared/utils/array/models/ArrayUtilConfigWithArrayItem";
import { moveItemAfterArrayItem } from "shared/utils/array/moveItemAfterArrayItem";
import { moveItemBeforeArrayItem } from "shared/utils/array/moveItemBeforeArrayItem";

export const moveTasksLists = (
  lists: TasksListModel[],
  listToMove: TasksListModel,
  listToReplace: TasksListModel
) => {
  const listToMoveIndex = lists.findIndex(
    ({ id }: TasksListModel) => id === listToMove.id
  );
  const listToReplaceIndex = lists.findIndex(
    ({ id }: TasksListModel) => id === listToReplace.id
  );

  const movingConfig: ArrayUtilConfigWithArrayItem<TasksListModel> = {
    array: lists,
    item: listToMove,
    arrayItem: listToReplace,
    uniqueKey: "id",
  };

  return listToMoveIndex < listToReplaceIndex
    ? moveItemAfterArrayItem<TasksListModel>(movingConfig)
    : moveItemBeforeArrayItem<TasksListModel>(movingConfig);
};
