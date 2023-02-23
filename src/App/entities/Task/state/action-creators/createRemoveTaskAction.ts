import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { Action } from "App/state/models/Action";
import { TaskActionType } from "../TaskActionType.enum";

interface RemoveTaskActionPayload {
  task: TaskViewModel;
}

export type RemoveTaskAction = Action<TaskActionType.RemoveTask, RemoveTaskActionPayload>;

export const createRemoveTaskAction = (task: TaskViewModel): RemoveTaskAction => ({
  type: TaskActionType.RemoveTask,
  payload: { task },
});
