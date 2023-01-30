import { useAppState } from "App/state/hooks/useAppState";
import { AddList } from "./components/AddList/AddList";
import { useBoardPageActions } from "./hooks/useBoardPageActions";
import { AppPageLayout } from "App/components/AppPageLayout/AppPageLayout";
import { TasksListModel } from "App/components/TasksList/models/TasksListModel";
import { TasksList } from "App/components/TasksList/TasksList";
import { BoardPageDragLayer } from "./components/BoardPageDragLayer";
import { BoardPageHeader } from "./components/BoardPageHeader";
import { BoardModel } from "App/components/Board/models/BoardModel";
import { BoardPageCell } from "./components/BoardPageCell";
import { BoardPageContent } from "./components/BoardPageContent";

interface BoardPageProps {
  title?: string;
}

export const BoardPage = ({ title = "Test board title" }: BoardPageProps) => {
  const { tasksLists } = useAppState();
  const { addTasksList } = useBoardPageActions();

  // TODO: refactor to use board from the API
  const board = { title } as BoardModel;

  return (
    <AppPageLayout slotHeader={<BoardPageHeader board={board} />}>
      <BoardPageContent>
        <BoardPageDragLayer />

        {tasksLists.map((list: TasksListModel) => (
          <BoardPageCell key={list.id}>
            <TasksList list={list} />
          </BoardPageCell>
        ))}

        <BoardPageCell className="mr-0">
          <AddList onAdd={addTasksList}>+ Add new list</AddList>
        </BoardPageCell>
      </BoardPageContent>
    </AppPageLayout>
  );
};
