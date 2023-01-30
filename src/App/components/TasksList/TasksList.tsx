import { DndCard } from "../DndCard/DndCard";
import { AddTask } from "./components/AddTask/AddTask";
import { TasksListHeader } from "./components/TasksListHeader/TasksListHeader";
import { TasksListTasks } from "./components/TasksListTasks/TasksListTasks";
import { useTasksListActions } from "./hooks/useTasksListActions";
import { mapTasksListToDraggedItem } from "./mappers/mapTasksListToDraggedItem";
import { TasksListModel } from "./models/TasksListModel";

export interface TasksListProps {
  list: TasksListModel;
}

export const TasksList = ({ list }: TasksListProps) => {
  const { remove, addTask, dropOnList } = useTasksListActions(list);

  return (
    <DndCard
      slotHeader={<TasksListHeader onRemove={remove} list={list} />}
      slotContent={<TasksListTasks tasks={list.tasks} />}
      slotFooter={<AddTask onAdd={addTask}>+ Add new task</AddTask>}
      backgroundColor="#ebecf0"
      draggedItem={mapTasksListToDraggedItem(list)}
      onDrop={dropOnList}
    />
  );
};
