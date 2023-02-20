import { FormEvent, useReducer } from "react";
import { FormContainer } from "shared/components/Form/FormContainer";
import { TextInput } from "shared/components/Form/Input";
import { useInputFocus } from "shared/hooks/useInputFocus";
import { Checkbox } from "shared/components/Form/Checkbox";
import { FormFooter } from "shared/components/Form/FormFooter";

type FormEventType = FormEvent<HTMLFormElement>;

export interface TasksListFormValue {
  title: string;
  isPinned: boolean;
}

export interface TasksListFormProps {
  onSubmit: (value: TasksListFormValue) => void;
  onCancel: () => void;
}

export const TasksListForm = ({ onSubmit, onCancel }: TasksListFormProps) => {
  const initialFormValue: TasksListFormValue = {
    title: "",
    isPinned: false,
  };

  const [formValue, dispatch] = useReducer(
    (prevValue: TasksListFormValue, payload: Partial<TasksListFormValue>) => ({
      ...prevValue,
      ...payload,
    }),
    initialFormValue
  );

  const changeTitle = (title: string) => dispatch({ title });
  const changeIsPinned = (isPinned: boolean) => dispatch({ isPinned });

  const cancel = () => onCancel();
  const add = () => onSubmit(formValue);

  const submit = (e: FormEventType) => {
    e.preventDefault();
    add();
  };

  return (
    <FormContainer onSubmit={submit}>
      <div className="form-row">
        <TextInput
          ref={useInputFocus()}
          placeholder="Enter list title"
          value={formValue.title}
          onChange={changeTitle}
        />
      </div>

      <div className="form-row">
        <Checkbox
          value={formValue.isPinned}
          label="Pinned"
          onChange={changeIsPinned}
        />
      </div>

      <FormFooter submitText="Add list" onSubmit={add} onCancel={cancel} />
    </FormContainer>
  );
};
