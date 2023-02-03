import { AppPageLayout } from "App/components/AppPageLayout/AppPageLayout";
import { useAppState } from "App/state/hooks/useAppState";
import { BoardsList } from "App/widgets/BoardsList/BoardsList";
import { AppPageTitle } from "App/components/AppPageTitle/AppPageTitle";

export const FavoriteBoardsPage = () => {
  const { favoriteBoards } = useAppState();

  return (
    <AppPageLayout slotHeader={<AppPageTitle>Favorite boards</AppPageTitle>}>
      <BoardsList boards={favoriteBoards} isShowAddBoard={false} />
    </AppPageLayout>
  );
};
