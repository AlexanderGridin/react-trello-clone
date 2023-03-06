import { FormEvent, useReducer } from "react";
import { FormContainer } from "shared/components/Form/FormContainer";
import { TextInput } from "shared/components/Form/inputs";
import { Checkbox } from "shared/components/Form/Checkbox";
import { FormFooter } from "shared/components/Form/FormFooter";
import { TasksListFormValue } from "./models";

type FormEventType = FormEvent<HTMLFormElement>;

export interface TasksListFormProps {
  entity?: TasksListFormValue;
  onSubmit: (value: TasksListFormValue) => void;
  onCancel: () => void;
}

export const TasksListForm = ({ entity, onSubmit, onCancel }: TasksListFormProps) => {
  const initialFormValue: TasksListFormValue = entity || new TasksListFormValue();

  const [formValue, dispatch] = useReducer(
    (prevValue: TasksListFormValue, payload: Partial<TasksListFormValue>) => ({
      ...prevValue,
      ...payload,
    }),
    initialFormValue
  );

  const handleTitleChange = (title: string) => dispatch({ title });
  const handleIsPinnedChange = (isPinned: boolean) => dispatch({ isPinned });

  const cancel = () => onCancel();
  const add = () => onSubmit(formValue);

  const submit = (e: FormEventType) => {
    e.preventDefault();
    add();
  };

  return (
    <FormContainer onSubmit={submit}>
      <div className="form-row">
        <TextInput placeholder="Enter list title" value={formValue.title} isAutoFocus onChange={handleTitleChange} />
      </div>

      <div className="form-row">
        <Checkbox value={formValue.isPinned} label="Pinned" onChange={handleIsPinnedChange} />
      </div>

      <FormFooter submitText={entity ? "Update list" : "Add list"} onSubmit={add} onCancel={cancel} />
    </FormContainer>
  );
};
