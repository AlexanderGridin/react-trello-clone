import { TasksListProps } from "./TasksList";
import { Card } from "shared/components/Card/Card";
import { TasksListHeader } from "./components/TasksListHeader/TasksListHeader";
import { AddTask } from "./components/AddTask/AddTask";
import { useTasksListActions } from "./hooks/useTasksListActions";
import { renderTasks } from "./utils/renderTasks";

export const TasksListDragPreview = ({ list }: TasksListProps) => {
  const { remove, addTask } = useTasksListActions(list);

  return (
    <Card
      slotHeader={<TasksListHeader onRemove={remove} list={list} />}
      slotContent={renderTasks(list.tasks, true)}
      slotFooter={<AddTask onAdd={addTask}>+ Add new task</AddTask>}
      backgroundColor="#ebecf0"
      className="drag-preview"
    />
  );
};
