import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "shared/state/utils/createAction";
import { TaskModel } from "../../models/TaskModel";

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
