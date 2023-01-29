import { TasksListProps } from "./TasksList";
import { Card } from "shared/components/Card/Card";
import { TasksListHeader } from "./components/TasksListHeader/TasksListHeader";
import { AddTask } from "./components/AddTask/AddTask";
import { useTasksListActions } from "./hooks/useTasksListActions";
import { TaskModel } from "../Task/models/TaskModel";
import { Task } from "../Task/Task";

export const TasksListDragPreview = ({ list }: TasksListProps) => {
  const { remove, addTask, removeTask } = useTasksListActions(list);

  const header = <TasksListHeader onRemove={remove} list={list} />;

  const content = list.tasks.length ? (
    <ul className="plain-list">
      {list.tasks.map((task: TaskModel) => (
        <li key={task.id} className="mb">
          <Card>
            <Task task={task} onRemove={removeTask(task)}></Task>
          </Card>
        </li>
      ))}
    </ul>
  ) : null;

  const footer = <AddTask onAdd={addTask}>+ Add new task</AddTask>;

  return (
    <Card
      slotHeader={header}
      slotContent={content}
      slotFooter={footer}
      backgroundColor="#ebecf0"
      className="drag-preview"
    />
  );
};
