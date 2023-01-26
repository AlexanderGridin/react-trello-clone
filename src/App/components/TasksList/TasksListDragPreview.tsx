import { TasksListProps } from "./TasksList";
import { Card } from "shared/components/Card/Card";
import { TasksListHeader } from "./components/TasksListHeader/TasksListHeader";
import { AddTask } from "./components/AddTask/AddTask";
import { useTasksListActions } from "./hooks/useTasksListActions";
import { TaskModel } from "../Task/models/TaskModel";
import { Task } from "../Task/Task";

export const TasksListDragPreview = ({ list }: TasksListProps) => {
  const { remove, addTask, removeTask } = useTasksListActions(list);

  return (
    <Card
      header={<TasksListHeader onRemove={remove} title={list.title} />}
      footer={<AddTask onAdd={addTask}>+ Add new task</AddTask>}
      backgroundColor="#ebecf0"
      className="drag-preview"
    >
      <ul className="plain-list">
        {list.tasks.map((task: TaskModel) => (
          <li key={task.id} className="mb">
            <Card>
              <Task task={task} onRemove={removeTask(task)}></Task>
            </Card>
          </li>
        ))}
      </ul>
    </Card>
  );
};
