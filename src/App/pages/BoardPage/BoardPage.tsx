import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppPageLayout } from "App/components/AppPageLayout/AppPageLayout";
import { PageTitle } from "App/components/PageTitle/PageTitle";
import { useAppState } from "App/state/hooks/useAppState";

import {
  BoardWithTasksListsDto,
  mapBoardWithTasksListsDtoToViewModel,
} from "App/entities/Board/BoardWithTasksLists";

import { useBoardDispatcher } from "App/entities/Board/state/hooks/useBoardDispatcher";
import { getBoard } from "App/api/Board";
import { TasksListsCardsList } from "App/widgets/tasks-lists/TasksListsCardsList/TasksListsCardsList";

export const BoardPage = () => {
  const { id } = useParams();
  const { boardsCache } = useAppState();
  const dispatcher = useBoardDispatcher();
  const board = boardsCache[id as string];

  useEffect(() => {
    if (board) {
      return;
    }

    getBoard(id as string).then((boardDto: BoardWithTasksListsDto) => {
      const board = mapBoardWithTasksListsDtoToViewModel(boardDto);
      dispatcher.cacheBoard(board);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppPageLayout
      slotHeader={<PageTitle>{board?.title ?? "Loading board..."}</PageTitle>}
      isLoading={!board}
    >
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
