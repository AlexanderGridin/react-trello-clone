import { useState } from "react";
import { Modal } from "shared/components/Modal/Modal";
import { useTasksListDispatcher } from "App/entities/TasksList/state";
import { TasksListForm } from "../TasksListForm/TasksListForm";
import { updateTasksList as updateTasksListOnApi } from "App/api/TasksList/services";
import { mapTasksListDtoToViewModel, mapTasksListViewModelToFormValue } from "App/entities/TasksList/mappers";
import { TasksListViewModel } from "App/entities/TasksList/models";
import { TasksListFormValue } from "../TasksListForm/models";

interface TasksListModalProps {
  list: TasksListViewModel;
}

export const TasksListModal = ({ list }: TasksListModalProps) => {
  const dispatcher = useTasksListDispatcher();
  const [isLoading, setIsLoading] = useState(false);

  const closeModal = () => dispatcher.updateTasksList({ ...list, isEditing: false });
  const update = async (formValue: TasksListFormValue) => {
    setIsLoading(true);

    const listDto = await updateTasksListOnApi(list.id, {
      ...formValue,
      boardId: list.boardId,
    });

    if (listDto) {
      dispatcher.updateTasksList(mapTasksListDtoToViewModel(listDto));
    }

    setIsLoading(false);
  };

  return (
    <Modal title="Edit list" isLoading={isLoading} open={list.isEditing} onClose={closeModal}>
      <TasksListForm entity={mapTasksListViewModelToFormValue(list)} onSubmit={update} onCancel={closeModal} />
    </Modal>
  );
};
