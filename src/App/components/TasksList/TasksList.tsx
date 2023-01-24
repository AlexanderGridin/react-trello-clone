import { DraggedItemType } from "App/enums/DraggedItemType";
import { AppDraggedItem } from "App/models/AppDraggedItem";
import { PlainUL } from "shared/components/PlainUL";
import { DndCard } from "../DndCard/DndCard";
import { TaskModel } from "../Task/models/TaskModel";
import { Task } from "../Task/Task";
import { AddTask } from "./components/AddTask/AddTask";
import { TasksListHeader } from "./components/TasksListHeader/TasksListHeader";
import { useTasksListActions } from "./hooks/useTasksListActions";
import { TasksListModel } from "./models/TasksListModel";

export interface TasksListProps {
  list: TasksListModel;
}

export const TasksList = ({ list }: TasksListProps) => {
  const { remove, addTask, removeTask, drop, dropTask } =
    useTasksListActions(list);

  const draggedList: AppDraggedItem = {
    id: list.id,
    type: DraggedItemType.TasksList,
    data: list,
  };

  return (
    <DndCard
      entity={draggedList}
      onDrop={drop}
      header={<TasksListHeader onRemove={remove} title={list.title} />}
      footer={<AddTask onAdd={addTask}>+ Add new task</AddTask>}
      backgroundColor="#ebecf0"
    >
      <PlainUL>
        {list.tasks.map((task: TaskModel) => (
          <li key={task.id} className="mb">
            <DndCard
              entity={{
                id: task.id,
                type: DraggedItemType.Task,
                data: task,
              }}
              onDrop={dropTask(task)}
            >
              <Task content={task.text} onRemove={removeTask(task)}></Task>
            </DndCard>
          </li>
        ))}
      </PlainUL>
    </DndCard>
  );
};
