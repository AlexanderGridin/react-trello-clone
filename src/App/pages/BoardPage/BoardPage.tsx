import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { getBoard as getBoardFromApi } from "App/api/Boards/services";
import { useSwitch } from "App/hooks";
import { PageTitle } from "App/components/PageTitle/PageTitle";
import { AppPageLayout } from "App/components/AppPageLayout/AppPageLayout";
import { TasksListsCardsList } from "App/widgets/tasks-lists/TasksListsCardsList/TasksListsCardsList";
import { BoardWithTasksListsDto } from "App/entities/Board/models";
import { useOpenedBoardDispatcher, useSelectBoard } from "App/store/OpenedBoard/hooks";
import { useBoardsCacheDispatcher, useSelectBoardsCache } from "App/store/BoardsCache/hooks";
import { FlexContainer } from "shared/components/FlexContainer";
import { Icon } from "shared/components/Icon/Icon";
import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";

export const BoardPage = () => {
  const { id } = useParams();
  const [isLoading, startLoading, endLoading] = useSwitch();

  const board = useSelectBoard();
  const dispatcher = useOpenedBoardDispatcher();

  const boardsCache = useSelectBoardsCache();
  const boardsCacheDispatcher = useBoardsCacheDispatcher();

  const getPageTitle = (): string => {
    if (!isLoading && board) {
      return board.title;
    }

    if (isLoading && !board) {
      return "Loading board...";
    }

    if (!isLoading && !board) {
      return "Board was not loaded...";
    }

    return "";
  };

  const loadBoard = async (id: string): Promise<void> => {
    const boardDto: BoardWithTasksListsDto | null = await getBoardFromApi(id);

    if (boardDto) {
      const board = BoardWithTasksListsDto.toViewModel(boardDto);
      dispatcher.setBoard(board);
    }

    endLoading();
  };

  useEffect(() => {
    const cachedBoard = id ? boardsCache[id] : null;

    if (cachedBoard) {
      dispatcher.setBoard(cachedBoard);
      return;
    }

    if (id) {
      startLoading();
      loadBoard(id);
    }

    return () => {
      dispatcher.setBoard(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (board) {
      boardsCacheDispatcher.cacheBoard(board);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board]);

  const header = (
    <PageTitle>
      <FlexContainer>
        <Icon icon={MaterialIcon.Board} className="mr" /> {getPageTitle()}
      </FlexContainer>
    </PageTitle>
  );

  return (
    <AppPageLayout slotHeader={header} isLoading={isLoading}>
      {board && (
        <TasksListsCardsList
          boardId={board.id}
          lists={[...board.pinnedTasksLists, ...board.tasksLists]}
          isShowAddTasksList
        />
      )}
    </AppPageLayout>
  );
};
