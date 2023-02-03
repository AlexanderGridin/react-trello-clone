import { AppPageLayout } from "App/components/AppPageLayout/AppPageLayout";
import { useAppState } from "App/state/hooks/useAppState";
import { BoardsList } from "App/widgets/BoardsList/BoardsList";
import { AppPageTitle } from "App/components/AppPageTitle/AppPageTitle";

export const BoardsPage = () => {
  const { boards } = useAppState();

  return (
    <AppPageLayout slotHeader={<AppPageTitle>Boards</AppPageTitle>}>
      <BoardsList boards={boards} />
    </AppPageLayout>
  );
};
