import { AppState } from "App/state/models/AppState";
import { moveItemAfterArrayItem } from "shared/utils/array/moveItemAfterArrayItem";
import { moveItemBeforeArrayItem } from "shared/utils/array/moveItemBeforeArrayItem";
import { TasksListModel } from "../../models/TasksListModel";
import { MoveTasksListAction } from "../actions/moveTasksList";

export const moveTasksListReducer = (
  state: AppState,
  action: MoveTasksListAction
): AppState => {
  const lists = [...state.tasksLists];
  const listToMove = action.payload.listToMove;
  const listToReplace = action.payload.listToReplace;

  const listToMoveIndex = lists.findIndex((list) => list.id === listToMove.id);
  const listToReplaceIndex = lists.findIndex(
    (list) => list.id === listToReplace.id
  );

  const tasksLists =
    listToMoveIndex < listToReplaceIndex
      ? moveItemAfterArrayItem<TasksListModel>({
          array: state.tasksLists,
          item: listToMove,
          arrayItem: listToReplace,
          uniqueKey: "id",
        })
      : moveItemBeforeArrayItem<TasksListModel>({
          array: state.tasksLists,
          item: listToMove,
          arrayItem: listToReplace,
          uniqueKey: "id",
        });

  return {
    ...state,
    tasksLists,
  };
};
