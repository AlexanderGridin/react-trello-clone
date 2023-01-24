import { useTasksListDispatchers } from "App/components/TasksList/state/hooks/useTasksListDispatchers";

export const useBoardActions = () => {
  const { dispatchAddTasksList } = useTasksListDispatchers();
  const addTasksList = (title: string) => dispatchAddTasksList(title);

  return { addTasksList };
};
