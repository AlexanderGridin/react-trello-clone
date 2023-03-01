import { TaskViewModel } from "App/entities/Task/models";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { useAppState } from "App/state/hooks/useAppState";
import { TasksListAction } from "..";
import { createAddTasksListAction } from "../action-creators/createAddTasksListAction";
import { createMoveTasksListAction } from "../action-creators/createMoveTasksListAction";
import { createPushTaskInTasksListAction } from "../action-creators/createPushTaskInTasksListAction";
import { createRemoveTasksListAction } from "../action-creators/createRemoveTasksListAction";
import { createUpdateTasksListAction } from "../action-creators/createUpdateTasksListAction";

export const useTasksListDispatcher = () => {
  const { dispatch } = useAppState();

  const dispatchForModule = (action: TasksListAction) =>
    dispatch({
      module: "TasksList",
      ...action,
    });

  const addTasksList = (list: TasksListViewModel) => dispatchForModule(createAddTasksListAction(list));
  const removeTasksList = (list: TasksListViewModel) => dispatchForModule(createRemoveTasksListAction(list));
  const updateTasksList = (list: TasksListViewModel) => dispatchForModule(createUpdateTasksListAction(list));

  const moveTasksList = (listToMove: TasksListViewModel, listToReplace: TasksListViewModel) =>
    dispatchForModule(createMoveTasksListAction(listToMove, listToReplace));

  const pushTaskInTasksList = (list: TasksListViewModel, task: TaskViewModel) =>
    dispatchForModule(createPushTaskInTasksListAction(list, task));

  return {
    addTasksList,
    removeTasksList,
    moveTasksList,
    pushTaskInTasksList,
    updateTasksList,
  };
};
