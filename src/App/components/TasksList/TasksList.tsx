import { AddTask } from "App/components/AddTask/AddTask";
import { CardsList } from "shared/components/CardsList/CardsList";
import { useTasksListItems } from "./hooks/useTasksListItems";
import { useTasksListActions } from "./hooks/useTasksListActions";
import { TasksListModel } from "./models/TasksListModel";

interface TasksListProps {
  list: TasksListModel;
}

export const TasksList = ({ list }: TasksListProps): JSX.Element => {
  const { remove, removeSelectedTask, addNewTask } = useTasksListActions(list);
  const listItems = useTasksListItems(list);

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
