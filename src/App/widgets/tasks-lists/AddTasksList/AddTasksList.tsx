import { useReducer } from "react";

import { Card } from "shared/components/Card/Card";
import { addTasksList as addTasksListOnApi } from "App/api/TasksList/services";
import { TasksListCreateDto, TasksListDto, TasksListViewModel } from "App/entities/TasksList/models";

import { AddListButton } from "./components";
import { TasksListForm } from "../TasksListForm";
import { AddTasksListState } from "./models";
import { TasksListFormValue } from "../TasksListForm/models";

export interface IAddTasksListProps {
  boardId: string;
  onAdd: (list: TasksListViewModel) => void;
}

export const AddTasksList = ({ boardId, onAdd }: IAddTasksListProps) => {
  const [componentState, dispatch] = useReducer(
    (state: AddTasksListState, payload: Partial<AddTasksListState>) => ({
      ...state,
      ...payload,
    }),
    { ...new AddTasksListState() }
  );

  const showForm = () => dispatch({ isShowForm: true });
  const hideForm = () => dispatch({ isShowForm: false });

  const startLoading = () => dispatch({ isLoading: true });
  const endLoading = () => dispatch({ isLoading: false });

  const addList = async (formValue: TasksListFormValue) => {
    startLoading();

    const createDto = new TasksListCreateDto({
      ...formValue,
      boardId,
    });

    const listDto = await addTasksListOnApi(createDto);
    if (listDto) {
      onAdd(TasksListDto.toViewModel(listDto));
      hideForm();
    }

    endLoading();
  };

  if (componentState.isShowForm) {
    return (
      <Card backgroundColor="#D8DEE9" isLoading={componentState.isLoading}>
        <TasksListForm onSubmit={addList} onCancel={hideForm} />
      </Card>
    );
  }

  return <AddListButton onClick={showForm}>+ Add tasks list</AddListButton>;
};
