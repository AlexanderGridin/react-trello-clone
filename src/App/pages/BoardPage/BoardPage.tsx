import { useParams } from "react-router-dom";
import { AppPageLayout } from "App/components/AppPageLayout/AppPageLayout";
import { PageTitle } from "App/components/PageTitle/PageTitle";
import { ListOfTasksLists } from "App/widgets/ListOfTasksLists/ListOfTasksLists";
import { BoardWithTasksListsViewModel } from "App/entities/Board/BoardWithTasksLists";

export const BoardPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = useParams();

  const board = new BoardWithTasksListsViewModel({ title: "Test" });

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
