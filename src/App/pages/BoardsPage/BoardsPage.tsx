import { AppPageLayout } from "App/components/AppPageLayout/AppPageLayout";
import { PageTitle } from "App/components/PageTitle/PageTitle";
import { useAppState } from "App/state/hooks/useAppState";
import { BoardsList } from "App/widgets/BoardsList/BoardsList";

export const BoardsPage = () => {
  const { boards } = useAppState();

  return (
    <AppPageLayout slotHeader={<PageTitle>Boards</PageTitle>}>
      <BoardsList boards={boards} />
    </AppPageLayout>
  );
};
