import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { AppActionType } from "App/state/enums/AppActionType.enum";
import { Action } from "App/state/models/Action";

interface MoveTaskActionPayload {
  taskToMove: TaskViewModel;
  taskToReplace: TaskViewModel;
}

export type MoveTaskAction = Action<AppActionType.MoveTask, MoveTaskActionPayload>;

export const createMoveTaskAction = (taskToMove: TaskViewModel, taskToReplace: TaskViewModel): MoveTaskAction => ({
  type: AppActionType.MoveTask,
  payload: { taskToMove, taskToReplace },
});
