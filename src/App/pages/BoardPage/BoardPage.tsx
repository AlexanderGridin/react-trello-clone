import { useParams } from "react-router-dom";
import { useAppState } from "App/state/hooks/useAppState";
import { AppPageLayout } from "App/components/AppPageLayout/AppPageLayout";
import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { PageTitle } from "App/components/PageTitle/PageTitle";
import { ListOfTasksLists } from "App/widgets/ListOfTasksLists/ListOfTasksLists";

export const BoardPage = () => {
  const { id } = useParams();
  const { boards } = useAppState();

  const board =
    boards.find((board: BoardViewModel) => board.id === id) ||
    new BoardViewModel({});

  if (!board) {
    return null;
  }

  const lists = [...board.pinnedTasksLists, ...board.tasksLists];

  return (
    <AppPageLayout slotHeader={<PageTitle>{board.title}</PageTitle>}>
      <ListOfTasksLists boardId={board.id} lists={lists} isShowAddTasksList />
    </AppPageLayout>
  );
};
