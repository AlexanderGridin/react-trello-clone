import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "App/state/utils/createAction";

interface MoveTasksListActionPayload {
  listToMove: TasksListViewModel;
  listToReplace: TasksListViewModel;
}

export const moveTasksList = (
  listToMove: TasksListViewModel,
  listToReplace: TasksListViewModel
) => {
  const { MoveList } = AppActionType;
  const payload: MoveTasksListActionPayload = {
    listToMove,
    listToReplace,
  };

  return createAction<typeof MoveList, MoveTasksListActionPayload>(
    MoveList,
    payload
  );
};

export type MoveTasksListAction = ReturnType<typeof moveTasksList>;
