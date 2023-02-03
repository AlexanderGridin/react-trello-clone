import { useParams } from "react-router-dom";
import { useAppState } from "App/state/hooks/useAppState";
import { AppPageLayout } from "App/components/AppPageLayout/AppPageLayout";
import { BoardPageDragLayer } from "./components/BoardPageDragLayer";
import { BoardPageCell } from "./components/BoardPageCell";
import { BoardPageContent } from "./components/BoardPageContent";
import { BoardPageTasksLists } from "./components/BoardPageTasksLists";
import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { useBoardPageFeatures } from "./hooks/useBoardPageFeatures";
import { AddTasksList } from "App/widgets/AddTasksList/AddTasksList";
import { AppPageTitle } from "App/components/AppPageTitle/AppPageTitle";

export const BoardPage = () => {
  const { id } = useParams();
  const { boards } = useAppState();

  const board =
    boards.find((board: BoardViewModel) => board.id === id) ||
    new BoardViewModel({});

  const { addTasksList } = useBoardPageFeatures(board);

  if (!board) {
    return null;
  }

  const lists = [...board.pinnedTasksLists, ...board.tasksLists];

  return (
    <AppPageLayout slotHeader={<AppPageTitle>{board.title}</AppPageTitle>}>
      <BoardPageContent>
        <BoardPageDragLayer />

        <BoardPageTasksLists lists={lists} />

        <BoardPageCell className="mr-0">
          <AddTasksList onAdd={addTasksList} />
        </BoardPageCell>
      </BoardPageContent>
    </AppPageLayout>
  );
};
