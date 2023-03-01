import { Action } from "App/state/models/Action";
import { TaskViewModel } from "../../models";
import { TaskActionType } from "../TaskActionType.enum";

interface MoveTaskActionPayload {
  taskToMove: TaskViewModel;
  taskToReplace: TaskViewModel;
}

export type MoveTaskAction = Action<TaskActionType.MoveTask, MoveTaskActionPayload>;

export const createMoveTaskAction = (taskToMove: TaskViewModel, taskToReplace: TaskViewModel): MoveTaskAction => ({
  type: TaskActionType.MoveTask,
  payload: { taskToMove, taskToReplace },
});
