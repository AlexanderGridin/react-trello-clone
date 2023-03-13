import { useState } from "react";
import { addTasksList as addTasksListOnApi } from "App/api/TasksList/services";
import { Card } from "shared/components/Card/Card";
import { AddListButton } from "./components/AddListButton";
import { TasksListForm } from "../TasksListForm/TasksListForm";
import { TasksListCreateDto, TasksListDto, TasksListViewModel } from "App/entities/TasksList/models";
import { TasksListFormValue } from "../TasksListForm/models";

export interface AddTasksListProps {
  boardId: string;
  onAdd: (list: TasksListViewModel) => void;
}

export const AddTasksList = ({ boardId, onAdd }: AddTasksListProps) => {
  const [isShowForm, setIsShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const showForm = () => setIsShowForm(true);
  const hideForm = () => setIsShowForm(false);

  const addList = async (formValue: TasksListFormValue) => {
    setIsLoading(true);

    const listCreateDto = new TasksListCreateDto({
      ...formValue,
      boardId,
    });

    const listDto = await addTasksListOnApi(listCreateDto);
    if (listDto) {
      onAdd(TasksListDto.toViewModel(listDto));
      hideForm();
    }

    setIsLoading(false);
  };

  if (isShowForm) {
    return (
      <Card backgroundColor="#D8DEE9" isLoading={isLoading}>
        <TasksListForm onSubmit={addList} onCancel={hideForm} />
      </Card>
    );
  }

  return <AddListButton onClick={showForm}>+ Add tasks list</AddListButton>;
};
