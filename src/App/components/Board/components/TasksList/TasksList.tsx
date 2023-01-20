import { CardsList } from "shared/components/CardsList/CardsList";
import { useTasksListActions } from "./hooks/useTasksListActions";
import { TasksListModel } from "./models/TasksListModel";
import { AddTask } from "./components/AddTask/AddTask";
import { useTasksListDragAndDrop } from "./hooks/useTasksListDragAndDrop";
import { mapToCardsList } from "./mappers/mapToCardsLits";
import { TasksListContainer } from "./components/TasksListContainer";

interface TasksListProps {
  list: TasksListModel;
}

export const TasksList = ({ list }: TasksListProps): JSX.Element => {
  const { remove, removeTask, addTask } = useTasksListActions(list);
  const { dragAndDropRef, isDragging } = useTasksListDragAndDrop(list);
  const className = isDragging ? "dragging" : "";

  return (
    <TasksListContainer>
      <CardsList
        ref={dragAndDropRef}
        list={mapToCardsList(list)}
        className={className}
        onRemove={remove}
        onRemoveCard={removeTask}
      >
        <AddTask onAdd={addTask}>+ Add new task</AddTask>
      </CardsList>
    </TasksListContainer>
  );
};
