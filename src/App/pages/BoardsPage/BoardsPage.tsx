import { useEffect } from "react";
import { AppPageLayout } from "App/components/AppPageLayout/AppPageLayout";
import { PageTitle } from "App/components/PageTitle/PageTitle";
import { useAppState } from "App/state/hooks/useAppState";
import { useBoardDispatcher } from "App/entities/Board/state/hooks/useBoardDispatcher";
import { Toggler } from "App/components/Toggler/Toggler";
import style from "./BoardsPage.module.css";
import { mapBoardDtoToViewModel } from "App/entities/Board/Board";
import { getAllBoards, getFavoriteBoards } from "App/api/Boards";
import { BoardsCardsList } from "App/widgets/boards/BoardsCardsList/BoardsCardsList";

export const BoardsPage = () => {
  const { boards, isShowFavorites } = useAppState();
  const dispatcher = useBoardDispatcher();

  const loadBoards = async (isShowFavorites = false) => {
    dispatcher.setBoards(null);

    const boardsDtos = isShowFavorites ? await getFavoriteBoards() : await getAllBoards();

    dispatcher.setBoards(boardsDtos.map(mapBoardDtoToViewModel));
  };

  useEffect(() => {
    if (boards?.length) {
      return;
    }

    loadBoards(isShowFavorites);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleFavorite = (isShowFavorites: boolean) => {
    dispatcher.setIsShowFavorites(isShowFavorites);
    loadBoards(isShowFavorites);
  };

  const header = (
    <>
      <PageTitle className={style.title}>Boards</PageTitle>
      <Toggler initialValue={isShowFavorites} onToggle={toggleFavorite} label="Favorites only" />
    </>
  );

  return (
    <AppPageLayout slotHeader={header} isLoading={!boards}>
      <BoardsCardsList boards={boards ?? []} isShowAddBoard={!isShowFavorites} />
    </AppPageLayout>
  );
};
