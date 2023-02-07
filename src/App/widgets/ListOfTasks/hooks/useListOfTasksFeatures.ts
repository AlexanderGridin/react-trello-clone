import { useTaskDispatchers } from "App/entities/Task/state/hooks/useTaskDispatchers";
import { TaskViewModel } from "App/entities/Task/TaskViewModel";

export const useListOfTasksFeatures = (boardId: string, listId: string) => {
  const { dispatchAddTask } = useTaskDispatchers();

  const addTask = (task: TaskViewModel) =>
    dispatchAddTask({ ...task, listId, boardId });

  return { addTask };
};
