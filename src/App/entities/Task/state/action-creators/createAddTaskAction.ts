import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { AppActionType } from "App/state/enums/AppActionType.enum";
import { Action } from "App/state/models/Action";

interface AddTaskActionPayload {
  task: TaskViewModel;
}

export type AddTaskAction = Action<AppActionType.AddTask, AddTaskActionPayload>;

export const createAddTaskAction = (task: TaskViewModel): AddTaskAction => ({
  type: AppActionType.AddTask,
  payload: { task },
});
