import { AppPageLayout } from "App/components/AppPageLayout/AppPageLayout";
import { PageTitle } from "App/components/PageTitle/PageTitle";
import { useAppState } from "App/state/hooks/useAppState";
import { BoardsList } from "App/widgets/BoardsList/BoardsList";

export const FavoriteBoardsPage = () => {
  const { favoriteBoards } = useAppState();

  return (
    <AppPageLayout slotHeader={<PageTitle>Favorite boards</PageTitle>}>
      <BoardsList boards={favoriteBoards} isShowAddBoard={false} />
    </AppPageLayout>
  );
};
