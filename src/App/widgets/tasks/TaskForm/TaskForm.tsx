import { FormEvent, useReducer } from "react";
import { FormContainer } from "shared/components/Form/FormContainer";
import { FormFooter } from "shared/components/Form/FormFooter";
import { TextInput } from "shared/components/Form/Input";
import { useInputFocus } from "shared/hooks/useInputFocus";

type FormEventType = FormEvent<HTMLFormElement>;

export interface TaskFormValue {
  title: string;
}

export interface TaskFormProps {
  onSubmit: (value: TaskFormValue) => void;
  onCancel: () => void;
}

export const TaskForm = ({ onSubmit, onCancel }: TaskFormProps) => {
  const initialFormValue: TaskFormValue = { title: "" };

  const [formValue, dispatch] = useReducer(
    (prevValue: TaskFormValue, payload: Partial<TaskFormValue>) => ({
      ...prevValue,
      ...payload,
    }),
    initialFormValue
  );

  const changeTitle = (title: string) => dispatch({ title });
  const cancel = () => onCancel();
  const add = () => onSubmit(formValue);

  const submit = (e: FormEventType) => {
    e.preventDefault();
    add();
  };

  return (
    <FormContainer onSubmit={submit}>
      <div className="form-row">
        <TextInput ref={useInputFocus()} placeholder="Enter task" value={formValue.title} onChange={changeTitle} />
      </div>

      <FormFooter submitText="Add task" onSubmit={add} onCancel={cancel} />
    </FormContainer>
  );
};