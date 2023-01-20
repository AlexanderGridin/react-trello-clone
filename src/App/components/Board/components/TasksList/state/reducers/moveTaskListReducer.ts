import { TasksListModel } from "App/components/Board/components/TasksList/models/TasksListModel";
import { AppState } from "App/state/models/AppState";
import { moveItemAfterArrayItem } from "shared/utils/array/moveItemAfterArrayItem";
import { moveItemBeforeArrayItem } from "shared/utils/array/moveItemBeforeArrayItem";
import { MoveTasksListAction } from "../actions/moveTasksList";

export const moveTasksListReducer = (
  state: AppState,
  action: MoveTasksListAction
): AppState => {
  const lists = [...state.tasksLists];
  const listToMove = action.payload.listToMove;
  const listHovered = action.payload.listToMoveAfter;

  const listToMoveIndex = lists.findIndex((list) => list.id === listToMove.id);
  const listHoveredIndex = lists.findIndex(
    (list) => list.id === listHovered.id
  );

  const tasksLists =
    listToMoveIndex < listHoveredIndex
      ? moveItemAfterArrayItem<TasksListModel>(
          [...state.tasksLists],
          listToMove,
          listHovered,
          "id"
        )
      : moveItemBeforeArrayItem<TasksListModel>(
          [...state.tasksLists],
          listToMove,
          listHovered,
          "id"
        );

  return {
    ...state,
    tasksLists,
  };
};
