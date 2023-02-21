import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { AppActionType } from "App/state/enums/AppActionType.enum";
import { Action } from "App/state/models/Action";

interface UpdateTaskActionPayload {
  task: TaskViewModel;
}

export type UpdateTaskAction = Action<AppActionType.UpdateTask, UpdateTaskActionPayload>;

export const createUpdateTaskAction = (task: TaskViewModel): UpdateTaskAction => ({
  type: AppActionType.UpdateTask,
  payload: { task },
});
