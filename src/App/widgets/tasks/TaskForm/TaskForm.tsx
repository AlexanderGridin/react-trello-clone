import { FormEvent, useReducer } from "react";
import { prioritySelectDataItems } from "App/static-data/prioritySelectDataItems";
import { TaskPriority } from "App/types/TaskPriority";
import { FormContainer } from "shared/components/Form/FormContainer";
import { FormFooter } from "shared/components/Form/FormFooter";
import { TextInput } from "shared/components/Form/inputs";
import { Select } from "shared/components/Form/Select/Select";
import { TaskFormValue } from "./models";

type FormEventType = FormEvent<HTMLFormElement>;

export interface TaskFormProps {
  entity?: TaskFormValue;
  onSubmit: (value: TaskFormValue) => void;
  onCancel: () => void;
}

export const TaskForm = ({ entity, onSubmit, onCancel }: TaskFormProps) => {
  const initialFormValue: TaskFormValue = entity || new TaskFormValue();

  const [formValue, dispatch] = useReducer(
    (prevValue: TaskFormValue, payload: Partial<TaskFormValue>) => ({
      ...prevValue,
      ...payload,
    }),
    initialFormValue
  );

  const handleTitleChange = (title: string) => dispatch({ title });
  const handlePriorityChange = (value: string) => dispatch({ priority: value as TaskPriority });

  const cancel = () => onCancel();
  const add = () => onSubmit(formValue);

  const submit = (e: FormEventType) => {
    e.preventDefault();
    add();
  };

  return (
    <FormContainer onSubmit={submit}>
      <div className="form-row">
        <TextInput placeholder="Enter task" value={formValue.title} isAutoFocus onChange={handleTitleChange} />
      </div>

      <div className="form-row">
        <Select
          value={formValue.priority}
          data={prioritySelectDataItems}
          onChange={handlePriorityChange}
          label="Priority"
        />
      </div>

      <FormFooter submitText={entity ? "Update task" : "Add task"} onSubmit={add} onCancel={cancel} />
    </FormContainer>
  );
};
