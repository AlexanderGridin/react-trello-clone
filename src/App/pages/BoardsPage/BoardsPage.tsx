import { useEffect, useState } from "react";
import { AppPageLayout } from "App/components/AppPageLayout/AppPageLayout";
import { PageTitle } from "App/components/PageTitle/PageTitle";
import { useAppState } from "App/state/hooks/useAppState";
import { BoardsList } from "App/widgets/BoardsList/BoardsList";
import { getBoards, getFavoriteBoards } from "api/Boards/Boards.api";
import { useBoardDispatchers } from "App/entities/Board/state/hooks/useBoardDispatchers";
import { Toggler } from "App/components/Toggler/Toggler";
import style from "./BoardsPage.module.css";
import { mapBoardDtoToViewModel } from "App/entities/Board/Board";

export const BoardsPage = () => {
  const { boards } = useAppState();
  const { dispatchSetBoards } = useBoardDispatchers();
  const [isShowFavorites, setIsShowFavorites] = useState(false);

  const loadBoards = async (isShowFavorites = false) => {
    dispatchSetBoards(null);

    const boardsDtos = isShowFavorites
      ? await getFavoriteBoards()
      : await getBoards();

    dispatchSetBoards(boardsDtos.map(mapBoardDtoToViewModel));
  };

  useEffect(() => {
    loadBoards(isShowFavorites);

    return () => {
      dispatchSetBoards(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleFavorite = (isShowFavorites: boolean) => {
    setIsShowFavorites(isShowFavorites);
    loadBoards(isShowFavorites);
  };

  const header = (
    <>
      <PageTitle className={style.title}>Boards</PageTitle>
      <Toggler
        initialValue={isShowFavorites}
        onToggle={toggleFavorite}
        label="Favorites only"
      />
    </>
  );

  return (
    <AppPageLayout slotHeader={header} isLoading={!boards}>
      <BoardsList boards={boards ?? []} isShowAddBoard={!isShowFavorites} />
    </AppPageLayout>
  );
};
