import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { AppActionType } from "App/state/enums/AppActionType.enum";
import { Action } from "App/state/models/Action";

interface MoveTasksListActionPayload {
  listToMove: TasksListViewModel;
  listToReplace: TasksListViewModel;
}

export type MoveTasksListAction = Action<AppActionType.MoveList, MoveTasksListActionPayload>;

export const createMoveTasksListAction = (
  listToMove: TasksListViewModel,
  listToReplace: TasksListViewModel
): MoveTasksListAction => ({
  type: AppActionType.MoveList,
  payload: { listToMove, listToReplace },
});
