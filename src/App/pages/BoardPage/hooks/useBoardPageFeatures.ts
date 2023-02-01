import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { useTasksListDispatchers } from "App/widgets/TasksList/state/hooks/useTasksListDispatchers";

export const useBoardPageFeatures = (board: BoardViewModel) => {
  const { dispatchAddTasksList } = useTasksListDispatchers();
  const addTasksList = (title: string) => dispatchAddTasksList(title, board.id);

  return { addTasksList };
};
