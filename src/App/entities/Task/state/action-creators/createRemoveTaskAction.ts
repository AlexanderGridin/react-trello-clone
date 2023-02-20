import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { AppActionType } from "App/state/enums/AppActionType.enum";
import { Action } from "App/state/models/Action";

interface RemoveTaskActionPayload {
  task: TaskViewModel;
}

export type RemoveTaskAction = Action<AppActionType.RemoveTask, RemoveTaskActionPayload>;

export const createRemoveTaskAction = (task: TaskViewModel): RemoveTaskAction => ({
  type: AppActionType.RemoveTask,
  payload: { task },
});
