import { useEffect } from "react";
import { AppPageLayout } from "App/components/AppPageLayout/AppPageLayout";
import { PageTitle } from "App/components/PageTitle/PageTitle";
import { useAppState } from "App/state/hooks/useAppState";
import { BoardsList } from "App/widgets/BoardsList/BoardsList";
import { useBoardDispatchers } from "App/entities/Board/state/hooks/useBoardDispatchers";
import { Toggler } from "App/components/Toggler/Toggler";
import style from "./BoardsPage.module.css";
import { mapBoardDtoToViewModel } from "App/entities/Board/Board";
import { getAllBoards, getFavoriteBoards } from "App/api/Boards";

export const BoardsPage = () => {
  const { boards, isShowFavorites } = useAppState();
  const { dispatchSetBoards, dispatchSetIsShowFavorites } =
    useBoardDispatchers();

  const loadBoards = async (isShowFavorites = false) => {
    dispatchSetBoards(null);

    const boardsDtos = isShowFavorites
      ? await getFavoriteBoards()
      : await getAllBoards();

    dispatchSetBoards(boardsDtos.map(mapBoardDtoToViewModel));
  };

  useEffect(() => {
    if (boards?.length) {
      return;
    }

    loadBoards(isShowFavorites);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleFavorite = (isShowFavorites: boolean) => {
    dispatchSetIsShowFavorites(isShowFavorites);
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
