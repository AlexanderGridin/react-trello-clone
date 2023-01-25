import { TaskModel } from "App/components/Task/models/TaskModel";
import { ActionType } from "App/state/enums/ActionType.enum";
import { createAction } from "App/state/utils/createAction";
import { TasksListModel } from "../../models/TasksListModel";

interface PushTaskInTasksListPayload {
  list: TasksListModel;
  task: TaskModel;
}

export const pushTaskInTasksList = (list: TasksListModel, task: TaskModel) => {
  const { PushTaskInTasksList } = ActionType;
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
