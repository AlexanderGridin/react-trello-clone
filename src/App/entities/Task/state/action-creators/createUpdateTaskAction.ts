import { Action } from "App/state/models/Action";
import { TaskViewModel } from "../../models";
import { TaskActionType } from "../TaskActionType.enum";

interface UpdateTaskActionPayload {
  task: TaskViewModel;
}

export type UpdateTaskAction = Action<TaskActionType.UpdateTask, UpdateTaskActionPayload>;

export const createUpdateTaskAction = (task: TaskViewModel): UpdateTaskAction => ({
  type: TaskActionType.UpdateTask,
  payload: { task },
});
