import { useParams } from "react-router-dom";
import { useAppState } from "App/state/hooks/useAppState";
import { AddList } from "./components/AddList/AddList";
import { useBoardPageActions } from "./hooks/useBoardPageActions";
import { AppPageLayout } from "App/components/AppPageLayout/AppPageLayout";
import { BoardPageDragLayer } from "./components/BoardPageDragLayer";
import { BoardPageHeader } from "./components/BoardPageHeader";
import { BoardPageCell } from "./components/BoardPageCell";
import { BoardPageContent } from "./components/BoardPageContent";
import { BoardPageTasksLists } from "./components/BoardPageTasksLists";
import { BoardModel } from "App/components/Board/models/BoardModel";

export const BoardPage = () => {
  const { id } = useParams();
  const { boards } = useAppState();

  const board =
    boards.find((board: BoardModel) => board.id === id) || new BoardModel({});

  const { addTasksList } = useBoardPageActions(board);

  if (!board) {
    return null;
  }

  return (
    <AppPageLayout slotHeader={<BoardPageHeader board={board} />}>
      <BoardPageContent>
        <BoardPageDragLayer />

        <BoardPageTasksLists lists={board.tasksLists} />

        <BoardPageCell className="mr-0">
          <AddList onAdd={addTasksList}>+ Add new list</AddList>
        </BoardPageCell>
      </BoardPageContent>
    </AppPageLayout>
  );
};
