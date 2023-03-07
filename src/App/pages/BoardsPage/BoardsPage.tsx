import { useEffect } from "react";
import { AppPageLayout } from "App/components/AppPageLayout/AppPageLayout";
import { PageTitle } from "App/components/PageTitle/PageTitle";
import style from "./BoardsPage.module.css";
import { getAllBoards, getFavoriteBoards } from "App/api/Boards/services";
import { BoardsCardsList } from "App/widgets/boards/BoardsCardsList/BoardsCardsList";
import { Switch } from "shared/components/Switch/Switch";
import { mapBoardDtoToViewModel } from "App/entities/Board/mappers";
import { useSelectBoards, useSelectIsShowFavorites, useBoardDispatcher } from "App/entities/Board/store/hooks";

export const BoardsPage = () => {
  const boards = useSelectBoards();
  const isShowFavorites = useSelectIsShowFavorites();
  const dispatcher = useBoardDispatcher();

  const isShowAddBoard = Boolean(!isShowFavorites);

  const loadBoards = async (isShowFavorites = false) => {
    dispatcher.setBoards(null);
    const boardsDtos = isShowFavorites ? await getFavoriteBoards() : await getAllBoards();
    dispatcher.setBoards(boardsDtos.map(mapBoardDtoToViewModel));
  };

  const toggleFavorite = (isShowFavorites: boolean) => {
    dispatcher.setIsShowFavorites(isShowFavorites);
    loadBoards(isShowFavorites);
  };

  useEffect(() => {
    if (boards?.length) {
      return;
    }

    loadBoards(isShowFavorites);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const header = (
    <>
      <PageTitle className={style.title}>Boards</PageTitle>
      <Switch label="Favorites only" initialValue={isShowFavorites} isTextDark={false} onChange={toggleFavorite} />
    </>
  );

  return (
    <AppPageLayout slotHeader={header} isLoading={!boards}>
      <BoardsCardsList boards={boards ?? []} isShowAddBoard={isShowAddBoard} />
    </AppPageLayout>
  );
};
