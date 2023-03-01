import { useState } from "react";
import { Modal } from "shared/components/Modal/Modal";
import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { useTaskDispatcher } from "App/entities/Task/state";
import { TaskForm, TaskFormValue } from "../TaskForm/TaskForm";
import { mapTaskDtoToViewModel } from "App/entities/Task/mappers/mapTaskDtoToViewModel";
import { mapTaskViewModelToFormValue } from "App/entities/Task/mappers/mapTaskViewModelToFormValue";
import { updateTask as updateTaskOnApi } from "App/api/Task/updateTask";

interface TaskModalProps {
  task: TaskViewModel;
}

export const TaskModal = ({ task }: TaskModalProps) => {
  const dispatcher = useTaskDispatcher();
  const [isLoading, setIsLoading] = useState(false);

  const closeModal = () => dispatcher.updateTask({ ...task, isEditing: false });
  const update = async (formValue: TaskFormValue) => {
    setIsLoading(true);

    const taskDto = await updateTaskOnApi(task.id, {
      content: formValue.title,
      priority: formValue.priority,
      listId: task.listId,
      boardId: task.boardId,
    });

    if (taskDto) {
      dispatcher.updateTask(mapTaskDtoToViewModel(taskDto));
    }

    setIsLoading(false);
  };

  return (
    <Modal title="Edit task" isLoading={isLoading} open={task.isEditing} onClose={closeModal}>
      <TaskForm entity={mapTaskViewModelToFormValue(task)} onSubmit={update} onCancel={closeModal} />
    </Modal>
  );
};
