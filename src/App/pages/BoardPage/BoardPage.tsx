import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppPageLayout } from "App/components/AppPageLayout/AppPageLayout";
import { PageTitle } from "App/components/PageTitle/PageTitle";
import { getBoard as getBoardFromApi } from "App/api/Boards/services";
import { TasksListsCardsList } from "App/widgets/tasks-lists/TasksListsCardsList/TasksListsCardsList";
import { BoardWithTasksListsDto, BoardWithTasksListsViewModel } from "App/entities/Board/models";
import { mapBoardWithTasksListsDtoToViewModel } from "App/entities/Board/mappers";
import { useBoardDispatcher, useSelectBoardsCache } from "App/store/BoardsPage/hooks";

export const BoardPage = () => {
  const { id } = useParams();
  const boardsCache = useSelectBoardsCache();
  const dispatcher = useBoardDispatcher();
  const [isLoading, setIsLoading] = useState(false);

  const board: BoardWithTasksListsViewModel | null = id ? boardsCache[id] : null;
  const getPageTitle = (): string => {
    if (!isLoading && board) {
      return board.title;
    }

    if (isLoading && !board) {
      return "Loading board...";
    }

    return "Board was not loaded...";
  };

  useEffect(() => {
    if (board) {
      return;
    }

    setIsLoading(true);

    const loadBoard = async (id: string): Promise<void> => {
      const boardDto: BoardWithTasksListsDto | null = await getBoardFromApi(id);

      if (boardDto) {
        const board = mapBoardWithTasksListsDtoToViewModel(boardDto);
        dispatcher.cacheBoard(board);
      }

      setIsLoading(false);
    };

    loadBoard(id as string);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
