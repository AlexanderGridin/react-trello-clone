import { PlainUL } from "shared/components/PlainUL";
import { DndCard } from "../DndCard/DndCard";
import { mapTaskToDraggedItem } from "../Task/mappers/mapTaskToDraggedItem";
import { TaskModel } from "../Task/models/TaskModel";
import { Task } from "../Task/Task";
import { AddTask } from "./components/AddTask/AddTask";
import { TasksListHeader } from "./components/TasksListHeader/TasksListHeader";
import { useTasksListActions } from "./hooks/useTasksListActions";
import { mapTasksListToDraggedItem } from "./mappers/mapTasksListToDraggedItem";
import { TasksListModel } from "./models/TasksListModel";

export interface TasksListProps {
  list: TasksListModel;
}

export const TasksList = ({ list }: TasksListProps) => {
  const { remove, addTask, removeTask, dropOnList, dropOnTask } =
    useTasksListActions(list);

  return (
    <DndCard
      header={<TasksListHeader onRemove={remove} title={list.title} />}
      footer={<AddTask onAdd={addTask}>+ Add new task</AddTask>}
      backgroundColor="#ebecf0"
      draggedItem={mapTasksListToDraggedItem(list)}
      onDrop={dropOnList}
    >
      <PlainUL>
        {list.tasks.map((task: TaskModel) => (
          <li key={task.id} className="mb">
            <DndCard
              draggedItem={mapTaskToDraggedItem(task)}
              onDrop={dropOnTask(task)}
            >
              <Task content={task.text} onRemove={removeTask(task)}></Task>
            </DndCard>
          </li>
        ))}
      </PlainUL>
    </DndCard>
  );
};
