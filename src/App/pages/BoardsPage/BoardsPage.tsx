import { useEffect } from "react";

import { AppPageLayout } from "App/components/AppPageLayout/AppPageLayout";
import { PageTitle } from "App/components/PageTitle/PageTitle";
import { getAllBoards, getFavoriteBoards } from "App/api/Boards/services";
import { BoardsCardsList } from "App/widgets/boards/BoardsCardsList/BoardsCardsList";
import { Switch } from "shared/components/Switch/Switch";
import { useBoardsDispatcher, useSelectBoards, useSelectIsShowFavorites } from "App/store/Boards/hooks";
import { BoardDto } from "App/entities/Board/models";
import style from "./BoardsPage.module.css";

export const BoardsPage = () => {
  const boards = useSelectBoards();
  const isShowFavorites = useSelectIsShowFavorites();
  const dispatcher = useBoardsDispatcher();

  const isShowAddBoard = Boolean(!isShowFavorites);

  const loadBoards = async (isShowFavorites = false) => {
    dispatcher.setBoards(null);
    const boardsDtos = isShowFavorites ? await getFavoriteBoards() : await getAllBoards();
    dispatcher.setBoards(boardsDtos.map(BoardDto.toViewModel));
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
