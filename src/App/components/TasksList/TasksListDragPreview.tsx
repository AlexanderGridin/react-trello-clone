import { TasksListProps } from "./TasksList";
import { Card } from "shared/components/Card/Card";
import { TasksListHeader } from "./components/TasksListHeader/TasksListHeader";
import { AddTask } from "./components/AddTask/AddTask";
import { useTasksListActions } from "./hooks/useTasksListActions";
import { PlainUL } from "shared/components/PlainUL";
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
      <PlainUL>
        {list.tasks.map((task: TaskModel) => (
          <li key={task.id} className="mb">
            <Card>
              <Task content={task.content} onRemove={removeTask(task)}></Task>
            </Card>
          </li>
        ))}
      </PlainUL>
    </Card>
  );
};
