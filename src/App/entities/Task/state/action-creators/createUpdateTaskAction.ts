import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { Action } from "App/state/models/Action";
import { TaskActionType } from "../TaskActionType.enum";

interface UpdateTaskActionPayload {
  task: TaskViewModel;
}

export type UpdateTaskAction = Action<TaskActionType.UpdateTask, UpdateTaskActionPayload>;

export const createUpdateTaskAction = (task: TaskViewModel): UpdateTaskAction => ({
  type: TaskActionType.UpdateTask,
  payload: { task },
});
