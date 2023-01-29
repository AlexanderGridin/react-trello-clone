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

  const header = <TasksListHeader onRemove={remove} list={list} />;

  const content = list.tasks.length ? (
    <ul className="plain-list">
      {list.tasks.map((task: TaskModel) => (
        <li key={task.id} className="mb">
          <DndCard
            draggedItem={mapTaskToDraggedItem(task)}
            onDrop={dropOnTask(task)}
          >
            <Task task={task} onRemove={removeTask(task)} />
          </DndCard>
        </li>
      ))}
    </ul>
  ) : null;

  const footer = <AddTask onAdd={addTask}>+ Add new task</AddTask>;

  return (
    <DndCard
      slotHeader={header}
      slotContent={content}
      slotFooter={footer}
      backgroundColor="#ebecf0"
      draggedItem={mapTasksListToDraggedItem(list)}
      onDrop={dropOnList}
    />
  );
};
