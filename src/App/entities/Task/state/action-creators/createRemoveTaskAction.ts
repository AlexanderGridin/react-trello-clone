import { Action } from "App/state/models/Action";
import { TaskViewModel } from "../../models";
import { TaskActionType } from "../TaskActionType.enum";

interface RemoveTaskActionPayload {
  task: TaskViewModel;
}

export type RemoveTaskAction = Action<TaskActionType.RemoveTask, RemoveTaskActionPayload>;

export const createRemoveTaskAction = (task: TaskViewModel): RemoveTaskAction => ({
  type: TaskActionType.RemoveTask,
  payload: { task },
});
