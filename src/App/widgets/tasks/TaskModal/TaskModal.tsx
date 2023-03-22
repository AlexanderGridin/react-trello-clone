import { Modal } from "shared/components";
import { useSwitch } from "App/hooks";
import { updateTaskAsync } from "App/api/Task/services";
import { useTaskDispatcher } from "App/store/OpenedBoard/Task/hooks";
import { TaskDto, TaskUpdateDto, TaskViewModel } from "App/entities/Task/models";

import { TaskForm } from "../TaskForm";
import { TaskFormValue } from "../TaskForm/models";

interface ITaskModalProps {
  task: TaskViewModel;
}

export const TaskModal = ({ task }: ITaskModalProps) => {
  const dispatcher = useTaskDispatcher();
  const [isLoading, startLoading, endLoading] = useSwitch();

  const closeModal = () => dispatcher.updateTask({ ...task, isEditing: false });
  const update = async (formValue: TaskFormValue) => {
    startLoading();

    const taskUpdateDto = new TaskUpdateDto({
      content: formValue.title,
      priority: formValue.priority,
      listId: task.listId,
      boardId: task.boardId,
    });

    const taskDto = await updateTaskAsync(task.id, taskUpdateDto);
    if (taskDto) {
      dispatcher.updateTask(TaskDto.toViewModel(taskDto));
    }

    endLoading();
  };

  return (
    <Modal title="Edit task" isLoading={isLoading} open={task.isEditing} onClose={closeModal}>
      <TaskForm entity={TaskViewModel.toFormValue(task)} onSubmit={update} onCancel={closeModal} />
    </Modal>
  );
};
