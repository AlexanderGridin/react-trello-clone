import { useAppState } from "App/state/hooks/useAppState";
import { BoardContainer } from "./components/BoardContainer";
import { AddList } from "./components/AddList/AddList";
import { useBoardActions } from "./hooks/useBoardActions";
import { BoardCell } from "./components/BoardCell";
import { BoardHeader } from "./components/BoardHeader";
import { BoardContent } from "./components/BoardContent";
import { BoardDragLayer } from "./components/BoardDragLayer/BoardDragLayer";
import { TasksList } from "../TasksList/TasksList";
import { TasksListModel } from "../TasksList/models/TasksListModel";

interface BoardProps {
  title?: string;
}

export const Board = ({ title }: BoardProps): JSX.Element => {
  const { tasksLists } = useAppState();
  const { addTasksList } = useBoardActions();

  const isShowHeader = !!title;

  return (
    <BoardContainer isContainsHeader={isShowHeader}>
      {isShowHeader && <BoardHeader title={title} />}

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
    </BoardContainer>
  );
};
