import { useState } from "react";
import { Modal } from "shared/components/Modal/Modal";
import { TaskForm } from "../TaskForm/TaskForm";
import { updateTask as updateTaskOnApi } from "App/api/Task/services";
import { TaskDto, TaskUpdateDto, TaskViewModel } from "App/entities/Task/models";
import { TaskFormValue } from "../TaskForm/models";
import { useTaskDispatcher } from "App/store/BoardPage/Task/hooks/useTaskDispatcher";

interface TaskModalProps {
  task: TaskViewModel;
}

export const TaskModal = ({ task }: TaskModalProps) => {
  const dispatcher = useTaskDispatcher();
  const [isLoading, setIsLoading] = useState(false);

  const closeModal = () => dispatcher.updateTask({ ...task, isEditing: false });
  const update = async (formValue: TaskFormValue) => {
    setIsLoading(true);

    const taskUpdateDto = new TaskUpdateDto({
      content: formValue.title,
      priority: formValue.priority,
      listId: task.listId,
      boardId: task.boardId,
    });

    const taskDto = await updateTaskOnApi(task.id, taskUpdateDto);
    if (taskDto) {
      dispatcher.updateTask(TaskDto.toViewModel(taskDto));
    }

    setIsLoading(false);
  };

  return (
    <Modal title="Edit task" isLoading={isLoading} open={task.isEditing} onClose={closeModal}>
      <TaskForm entity={TaskViewModel.toFormValue(task)} onSubmit={update} onCancel={closeModal} />
    </Modal>
  );
};
