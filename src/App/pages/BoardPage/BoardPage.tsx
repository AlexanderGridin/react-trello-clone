import { useAppState } from "App/state/hooks/useAppState";
import { AddList } from "./components/AddList/AddList";
import { useBoardPageActions } from "./hooks/useBoardPageActions";
import { BoardCell } from "./components/BoardCell";
import { BoardHeader } from "./components/BoardHeader";
import { BoardContent } from "./components/BoardContent";
import { BoardDragLayer } from "./components/BoardDragLayer/BoardDragLayer";
import { AppPageLayout } from "App/components/AppPageLayout/AppPageLayout";
import { TasksListModel } from "App/components/TasksList/models/TasksListModel";
import { TasksList } from "App/components/TasksList/TasksList";

interface BoardPageProps {
  title: string;
}

export const BoardPage = ({ title }: BoardPageProps): JSX.Element => {
  const { tasksLists } = useAppState();
  const { addTasksList } = useBoardPageActions();

  return (
    <AppPageLayout slotHeader={<BoardHeader title={title} />}>
      <BoardContent>
        <BoardDragLayer />

        {tasksLists.map((list: TasksListModel) => (
          <BoardCell key={list.id}>
            <TasksList list={list} />
          </BoardCell>
        ))}

        <BoardCell className="mr-0">
          <AddList onAdd={addTasksList}>+ Add new list</AddList>
        </BoardCell>
      </BoardContent>
    </AppPageLayout>
  );
};
