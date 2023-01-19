import { TasksListModel } from "App/components/Board/components/TasksList/models/TasksListModel";
import { MoveListAction } from "App/state/actions/list/moveList";
import { AppState } from "App/state/models/AppState";
import { moveItemAfterArrayItem } from "shared/utils/array/moveItemAfterArrayItem";
import { moveItemBeforeArrayItem } from "shared/utils/array/moveItemBeforeArrayItem";

export const moveListReducer = (
  state: AppState,
  action: MoveListAction
): AppState => {
  const lists = [...state.tasksLists];
  const listToMove = action.payload.listToMove;
  const listHovered = action.payload.listToMoveAfter;

  const listToMoveIndex = lists.findIndex((list) => list.id === listToMove.id);
  const listHoveredIndex = lists.findIndex(
    (list) => list.id === listHovered.id
  );

  let tasksLists = [...state.tasksLists];

  if (listToMoveIndex < listHoveredIndex) {
    tasksLists = moveItemAfterArrayItem<TasksListModel>(
      tasksLists,
      listToMove,
      listHovered,
      "id"
    );
  } else {
    tasksLists = moveItemBeforeArrayItem<TasksListModel>(
      tasksLists,
      listToMove,
      listHovered,
      "id"
    );
  }

  return {
    ...state,
    tasksLists,
  };
};
