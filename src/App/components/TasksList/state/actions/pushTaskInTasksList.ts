import { createAction } from "shared/state/utils/createAction";
import { AppActionType } from "App/state/enums/AppActionType.enum";

import { TaskModel } from "App/entities/Task/TaskModel";
import { TasksListModel } from "App/entities/TasksList/TasksListModel";

interface PushTaskInTasksListPayload {
  list: TasksListModel;
  task: TaskModel;
}

export const pushTaskInTasksList = (list: TasksListModel, task: TaskModel) => {
  const { PushTaskInTasksList } = AppActionType;
  const payload: PushTaskInTasksListPayload = {
    list,
    task,
  };

  return createAction<typeof PushTaskInTasksList, PushTaskInTasksListPayload>(
    PushTaskInTasksList,
    payload
  );
};

export type PushTaskInTasksListAction = ReturnType<typeof pushTaskInTasksList>;
