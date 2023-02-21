import { useReducer } from "react";
import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { Card } from "shared/components/Card/Card";
import { AddTaskButton } from "./components/AddTaskButton";
import { addTask as addTaskOnApi } from "App/api/Task";
import { mapTaskDtoToViewModel } from "App/entities/Task/mappers/mapTaskDtoToViewModel";
import { TaskForm, TaskFormValue } from "../TaskForm/TaskForm";

export interface AddTaskProps {
  listId: string;
  boardId: string;
  onAdd: (task: TaskViewModel) => void;
}

interface AddTaskState {
  isShowForm: boolean;
  isLoading: boolean;
}

export const AddTask = ({ listId, boardId, onAdd }: AddTaskProps) => {
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

    const taskDto = await addTaskOnApi({
      ...formValue,
      content: formValue.title,
      listId,
      boardId,
    });

    if (taskDto) {
      onAdd(mapTaskDtoToViewModel(taskDto));
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
