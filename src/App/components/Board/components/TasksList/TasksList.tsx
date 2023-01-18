import { CardsList } from "shared/components/CardsList/CardsList";
import { useTasksListActions } from "./hooks/useTasksListActions";
import { TasksListModel } from "./models/TasksListModel";
import { AddTask } from "./components/AddTask/AddTask";
import { mapToCardsListItems } from "./mappers/mapToCardsListItems";

interface TasksListProps {
  list: TasksListModel;
}

export const TasksList = ({ list }: TasksListProps): JSX.Element => {
  const { remove, removeSelectedTask, addNewTask } = useTasksListActions(list);
  const listItems = mapToCardsListItems(list.tasks);

  return (
    <CardsList
      id={list.id}
      title={list.title}
      items={listItems}
      onRemove={remove}
      onRemoveCard={removeSelectedTask}
    >
      <AddTask onAdd={addNewTask}>+ Add new task</AddTask>
    </CardsList>
  );
};
