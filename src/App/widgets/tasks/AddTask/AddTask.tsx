import { Card } from "@alexandergridin/rtc-components-lib";
import { useReducer } from "react";

import { addTaskAsync } from "App/api/Task/services";
import { TaskCreateDto, TaskDto, TaskViewModel } from "App/entities/Task/models";

import { TaskForm } from "../TaskForm";
import { TaskFormValue } from "../TaskForm/models";
import { AddTaskButton } from "./components";
import { AddTaskComponentState } from "./models";

export interface IAddTaskProps {
  listId: string;
  boardId: string;
  onAdd: (task: TaskViewModel) => void;
}

export const AddTask = ({ listId, boardId, onAdd }: IAddTaskProps) => {
  const [componentState, dispatch] = useReducer(
    (state: AddTaskComponentState, payload: Partial<AddTaskComponentState>) => ({
      ...state,
      ...payload,
    }),
    { ...new AddTaskComponentState() }
  );

  const hideForm = () => dispatch({ isShowForm: false });
  const showForm = () => dispatch({ isShowForm: true });

  const startLoading = () => dispatch({ isLoading: true });
  const endLoading = () => dispatch({ isLoading: false });

  const addTask = async (formValue: TaskFormValue) => {
    startLoading();

    const taskCreateDto = new TaskCreateDto({
      content: formValue.title,
      priority: formValue.priority,
      listId,
      boardId,
    });

    const taskDto = await addTaskAsync(taskCreateDto);
    if (taskDto) {
      onAdd(TaskDto.toViewModel(taskDto));
      hideForm();
    }

    endLoading();
  };

  if (componentState.isShowForm) {
    return (
      <Card isLoading={componentState.isLoading}>
        <TaskForm onSubmit={addTask} onCancel={hideForm} />
      </Card>
    );
  }

  return <AddTaskButton onClick={showForm}>+ Add task</AddTaskButton>;
};
