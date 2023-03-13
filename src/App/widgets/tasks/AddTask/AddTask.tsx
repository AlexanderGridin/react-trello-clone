import { useReducer } from "react";
import { Card } from "shared/components/Card/Card";
import { AddTaskButton } from "./components/AddTaskButton";
import { addTask as addTaskOnApi } from "App/api/Task/services";
import { TaskForm } from "../TaskForm/TaskForm";
import { TaskCreateDto, TaskDto, TaskViewModel } from "App/entities/Task/models";
import { TaskFormValue } from "../TaskForm/models";
import { useSelectUser } from "App/store/User/hooks";

export interface IAddTaskProps {
  listId: string;
  boardId: string;
  onAdd: (task: TaskViewModel) => void;
}

interface AddTaskState {
  isShowForm: boolean;
  isLoading: boolean;
}

export const AddTask = ({ listId, boardId, onAdd }: IAddTaskProps) => {
  const user = useSelectUser();

  const initialState: AddTaskState = { isShowForm: false, isLoading: false };
  const [state, dispatch] = useReducer(
    (state: AddTaskState, payload: Partial<AddTaskState>) => ({
      ...state,
      ...payload,
    }),
    initialState
  );

  const hideForm = () => dispatch({ isShowForm: false });
  const showForm = () => dispatch({ isShowForm: true });

  const addTask = async (formValue: TaskFormValue) => {
    dispatch({ isLoading: true });

    const taskCreateDto = new TaskCreateDto({
      content: formValue.title,
      priority: formValue.priority,
      listId,
      boardId,
      user: user?.id as string,
    });

    const taskDto = await addTaskOnApi(taskCreateDto);
    if (taskDto) {
      onAdd(TaskDto.toViewModel(taskDto));
      hideForm();
    }

    dispatch({ isLoading: false });
  };

  if (state.isShowForm) {
    return (
      <Card isLoading={state.isLoading}>
        <TaskForm onSubmit={addTask} onCancel={hideForm} />
      </Card>
    );
  }

  return <AddTaskButton onClick={showForm}>+ Add task</AddTaskButton>;
};
