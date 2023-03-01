import { Action } from "App/state/models/Action";
import { TasksListViewModel } from "../../models";
import { TasksListActionType } from "../TasksListActionType.enum";

interface MoveTasksListActionPayload {
  listToMove: TasksListViewModel;
  listToReplace: TasksListViewModel;
}

export type MoveTasksListAction = Action<TasksListActionType.MoveList, MoveTasksListActionPayload>;

export const createMoveTasksListAction = (
  listToMove: TasksListViewModel,
  listToReplace: TasksListViewModel
): MoveTasksListAction => ({
  type: TasksListActionType.MoveList,
  payload: { listToMove, listToReplace },
});
