import { useState } from "react";
import { Modal } from "shared/components/Modal/Modal";
import { TasksListForm } from "../TasksListForm/TasksListForm";
import { updateTasksList as updateTasksListOnApi } from "App/api/TasksList/services";
import { TasksListDto, TasksListUpdateDto, TasksListViewModel } from "App/entities/TasksList/models";
import { TasksListFormValue } from "../TasksListForm/models";
import { useTasksListDispatcher } from "App/store/BoardPage/TasksList/hooks/useTasksListDispatcher";

interface ITasksListModalProps {
  list: TasksListViewModel;
}

export const TasksListModal = ({ list }: ITasksListModalProps) => {
  const dispatcher = useTasksListDispatcher();
  const [isLoading, setIsLoading] = useState(false);

  const closeModal = () => dispatcher.updateTasksList({ ...list, isEditing: false });
  const update = async (formValue: TasksListFormValue) => {
    setIsLoading(true);

    const listUpdateDto = new TasksListUpdateDto({
      ...formValue,
      boardId: list.boardId,
    });

    const listDto = await updateTasksListOnApi(list.id, listUpdateDto);
    if (listDto) {
      dispatcher.updateTasksList(TasksListDto.toViewModel(listDto));
    }

    setIsLoading(false);
  };

  return (
    <Modal title="Edit list" isLoading={isLoading} open={list.isEditing} onClose={closeModal}>
      <TasksListForm entity={TasksListViewModel.toFromValue(list)} onSubmit={update} onCancel={closeModal} />
    </Modal>
  );
};
