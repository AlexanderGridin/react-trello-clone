import { useEffect } from "react";

import { Switch } from "shared/components/Switch/Switch";
import { BoardDto } from "App/entities/Board/models";
import { PageTitle } from "App/components/PageTitle";
import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";
import { getAllBoards, getFavoriteBoards } from "App/api/Boards/services";
import { AppPageLayout } from "App/components/AppPageLayout";
import { BoardsCardsList } from "App/widgets/boards/BoardsCardsList";
import { useBoardsDispatcher, useSelectBoards, useSelectIsShowFavorites } from "App/store/Boards/hooks";

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
      <PageTitle icon={MaterialIcon.Boards} className={style.title}>
        Boards
      </PageTitle>

      <Switch label="Favorites only" initialValue={isShowFavorites} isTextDark={false} onChange={toggleFavorite} />
    </>
  );

  return (
    <AppPageLayout slotHeader={header} isLoading={!boards}>
      <BoardsCardsList boards={boards ?? []} isShowAddBoard={isShowAddBoard} />
    </AppPageLayout>
  );
};
