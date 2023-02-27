import { FormEvent, useReducer } from "react";
import { FormContainer } from "shared/components/Form/FormContainer";
import { TextInput } from "shared/components/Form/inputs";
import { Checkbox } from "shared/components/Form/Checkbox";
import { FormFooter } from "shared/components/Form/FormFooter";

type FormEventType = FormEvent<HTMLFormElement>;

export class TasksListFormValue {
  public title = "";
  public isPinned = false;
}

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
        <TextInput placeholder="Enter list title" value={formValue.title} isAutoFocus onChange={changeTitle} />
      </div>

      <div className="form-row">
        <Checkbox value={formValue.isPinned} label="Pinned" onChange={changeIsPinned} />
      </div>

      <FormFooter submitText={entity ? "Update list" : "Add list"} onSubmit={add} onCancel={cancel} />
    </FormContainer>
  );
};
