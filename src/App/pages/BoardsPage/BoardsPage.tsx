import { Switch, MaterialIcon, AppPageLayout, PageTitle } from "@alexandergridin/rtc-components-lib";
import { useEffect } from "react";

import { BoardDto } from "entities/Board/models";
import { getAllBoardsAsync, getFavoriteBoardsAsync } from "api/Boards/services";
import { useBoardsDispatcher, useSelectBoards, useSelectIsShowFavorites } from "store/Boards/hooks";

import { BoardsCardsList } from "../../widgets/boards/BoardsCardsList";
import style from "./BoardsPage.module.css";

export const BoardsPage = () => {
  const boards = useSelectBoards();
  const isShowFavorites = useSelectIsShowFavorites();
  const dispatcher = useBoardsDispatcher();

  const isShowAddBoard = Boolean(!isShowFavorites);

  const loadBoards = async (isShowFavorites = false) => {
    dispatcher.setBoards(null);
    const boardsDtos = isShowFavorites ? await getFavoriteBoardsAsync() : await getAllBoardsAsync();
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
