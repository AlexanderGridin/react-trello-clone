import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { Action } from "App/state/models/Action";
import { TaskActionType } from "../TaskActionType.enum";

interface AddTaskActionPayload {
  task: TaskViewModel;
}

export type AddTaskAction = Action<TaskActionType.AddTask, AddTaskActionPayload>;

export const createAddTaskAction = (task: TaskViewModel): AddTaskAction => ({
  type: TaskActionType.AddTask,
  payload: { task },
});
