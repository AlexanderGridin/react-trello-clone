import { TaskModel } from "App/entities/Task/TaskModel";
import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "shared/state/utils/createAction";

interface AddTaskActionPayload {
  task: TaskModel;
}

export const addTask = (task: TaskModel) => {
  const { AddTask } = AppActionType;
  const payload: AddTaskActionPayload = {
    task,
  };

  return createAction<typeof AddTask, AddTaskActionPayload>(AddTask, payload);
};

export type AddTaskAction = ReturnType<typeof addTask>;
