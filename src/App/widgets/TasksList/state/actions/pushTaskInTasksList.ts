import { createAction } from "shared/state/utils/createAction";
import { AppActionType } from "App/state/enums/AppActionType.enum";

import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { TasksListModel } from "App/entities/TasksList/TasksListModel";

interface PushTaskInTasksListPayload {
  list: TasksListModel;
  task: TaskViewModel;
}

export const pushTaskInTasksList = (
  list: TasksListModel,
  task: TaskViewModel
) => {
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
