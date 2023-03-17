import { TaskViewModel } from "App/entities/Task/models";
import { useTaskDispatcher } from "App/store/OpenedBoard/Task/hooks";

import { AddTask } from "../AddTask";
import { TaskCard } from "../TaskCard";

interface ITasksCardsListProps {
  boardId: string;
  listId: string;
  tasks: TaskViewModel[];
  isShowAddTask?: boolean;
}

export const TasksCardsList = ({ boardId, listId, tasks, isShowAddTask = false }: ITasksCardsListProps) => {
  const dispatcher = useTaskDispatcher();

  const addTask = (task: TaskViewModel) => dispatcher.addTask({ ...task, listId, boardId });

  return (
    <>
      {tasks.length > 0 && (
        <ul className="plain-list">
          {tasks.map((task: TaskViewModel) => (
            <li key={task.id} className="mb">
              <TaskCard task={task} key={task.id} />
            </li>
          ))}
        </ul>
      )}

      {isShowAddTask && <AddTask boardId={boardId} listId={listId} onAdd={addTask} />}
    </>
  );
};
