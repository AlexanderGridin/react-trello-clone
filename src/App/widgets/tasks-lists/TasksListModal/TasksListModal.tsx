import { Modal } from "@alexandergridin/rtc-components-lib";

import { useSwitch } from "shared/hooks";
import { TasksListDto, TasksListUpdateDto, TasksListViewModel } from "entities/TasksList/models";
import { updateTasksListAsync } from "api/TasksList/services";
import { useTasksListDispatcher } from "store/OpenedBoard/TasksList/hooks";

import { TasksListForm } from "../TasksListForm";
import { TasksListFormValue } from "../TasksListForm/models";

interface ITasksListModalProps {
  list: TasksListViewModel;
}

export const TasksListModal = ({ list }: ITasksListModalProps) => {
  const dispatcher = useTasksListDispatcher();
  const [isLoading, startLoading, endLoading] = useSwitch();

  const closeModal = () => dispatcher.updateTasksList({ ...list, isEditing: false });
  const update = async (formValue: TasksListFormValue) => {
    startLoading();

    const listUpdateDto = new TasksListUpdateDto({
      ...formValue,
      boardId: list.boardId,
    });

    const listDto = await updateTasksListAsync(list.id, listUpdateDto);
    if (listDto) {
      dispatcher.updateTasksList(TasksListDto.toViewModel(listDto));
    }

    endLoading();
  };

  return (
    <Modal title="Edit list" isLoading={isLoading} open={list.isEditing} onClose={closeModal}>
      <TasksListForm entity={TasksListViewModel.toFromValue(list)} onSubmit={update} onCancel={closeModal} />
    </Modal>
  );
};
