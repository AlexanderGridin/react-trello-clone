import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { AppPageLayout } from "App/components/AppPageLayout/AppPageLayout";
import { PageTitle } from "App/components/PageTitle/PageTitle";
import { getBoard as getBoardFromApi } from "App/api/Boards/services";
import { TasksListsCardsList } from "App/widgets/tasks-lists/TasksListsCardsList/TasksListsCardsList";
import { BoardWithTasksListsDto } from "App/entities/Board/models";
import { useBoardsCacheDispatcher, useSelectBoardsCache } from "App/store/BoardsCache/hooks";
import { useBoardPageDispatcher } from "App/store/BoardPage/hooks/useBoardPageDispatcher";
import { useSelectBoard } from "App/store/BoardPage/hooks/useSelectBoard";

export const BoardPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const board = useSelectBoard();
  const dispatcher = useBoardPageDispatcher();

  const boardsCache = useSelectBoardsCache();
  const boardsCacheDispatcher = useBoardsCacheDispatcher();

  const getPageTitle = (): string => {
    if (!isLoading && board) {
      return board.title;
    }

    if (isLoading && !board) {
      return "Loading board...";
    }

    return "Board was not loaded...";
  };

  const loadBoard = async (id: string): Promise<void> => {
    const boardDto: BoardWithTasksListsDto | null = await getBoardFromApi(id);

    if (boardDto) {
      const board = BoardWithTasksListsDto.toViewModel(boardDto);
      dispatcher.setBoard(board);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const cachedBoard = id ? boardsCache[id] : null;

    if (cachedBoard) {
      dispatcher.setBoard(cachedBoard);
      return;
    }

    if (id) {
      setIsLoading(true);
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

  return (
    <AppPageLayout slotHeader={<PageTitle>{getPageTitle()}</PageTitle>} isLoading={isLoading}>
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
