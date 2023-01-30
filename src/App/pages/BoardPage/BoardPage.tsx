import { useAppState } from "App/state/hooks/useAppState";
import { AddList } from "./components/AddList/AddList";
import { useBoardPageActions } from "./hooks/useBoardPageActions";
import { AppPageLayout } from "App/components/AppPageLayout/AppPageLayout";
import { BoardPageDragLayer } from "./components/BoardPageDragLayer";
import { BoardPageHeader } from "./components/BoardPageHeader";
import { BoardModel } from "App/components/Board/models/BoardModel";
import { BoardPageCell } from "./components/BoardPageCell";
import { BoardPageContent } from "./components/BoardPageContent";
import { BoardPageTasksLists } from "./components/BoardPageTasksLists";

export const BoardPage = () => {
  const { tasksLists } = useAppState();
  const { addTasksList } = useBoardPageActions();

  // TODO: refactor to use board from the API
  const board = { title: "Test board title" } as BoardModel;

  return (
    <AppPageLayout slotHeader={<BoardPageHeader board={board} />}>
      <BoardPageContent>
        <BoardPageDragLayer />

        <BoardPageTasksLists lists={tasksLists} />

        <BoardPageCell className="mr-0">
          <AddList onAdd={addTasksList}>+ Add new list</AddList>
        </BoardPageCell>
      </BoardPageContent>
    </AppPageLayout>
  );
};
