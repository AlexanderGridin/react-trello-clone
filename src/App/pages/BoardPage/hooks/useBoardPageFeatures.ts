import { BoardModel } from "App/entities/Board/BoardModel";
import { useTasksListDispatchers } from "App/widgets/TasksList/state/hooks/useTasksListDispatchers";

export const useBoardPageFeatures = (board: BoardModel) => {
  const { dispatchAddTasksList } = useTasksListDispatchers();
  const addTasksList = (title: string) => dispatchAddTasksList(title, board.id);

  return { addTasksList };
};
