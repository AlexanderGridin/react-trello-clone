import { FormEvent, useReducer } from "react";
import { FormContainer } from "shared/components/Form/FormContainer";
import { FormFooter } from "shared/components/Form/FormFooter";
import { TextInput } from "shared/components/Form/Input";
import { Select, SelectDataItem } from "shared/components/Form/Select";
import { useInputFocus } from "shared/hooks/useInputFocus";

type FormEventType = FormEvent<HTMLFormElement>;

export type TaskPriority = "height" | "medium" | "low" | "regular";
const priorityData: SelectDataItem[] = [
  {
    name: "height",
    value: "height",
  },
  {
    name: "medium",
    value: "medium",
  },
  {
    name: "low",
    value: "low",
  },
  {
    name: "regular",
    value: "regular",
  },
];

export interface TaskFormValue {
  title: string;
  priority: TaskPriority;
}

export interface TaskFormProps {
  entity?: TaskFormValue;
  onSubmit: (value: TaskFormValue) => void;
  onCancel: () => void;
}

export const TaskForm = ({ entity, onSubmit, onCancel }: TaskFormProps) => {
  const initialFormValue: TaskFormValue = { title: "", priority: "regular" };

  const [formValue, dispatch] = useReducer(
    (prevValue: TaskFormValue, payload: Partial<TaskFormValue>) => ({
      ...prevValue,
      ...payload,
    }),
    entity || initialFormValue
  );

  const changeTitle = (title: string) => dispatch({ title });
  const changePriority = (value: string) => dispatch({ priority: value as TaskPriority });

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

      <div className="form-row">
        <Select value={formValue.priority} data={priorityData} onChange={changePriority} label="Priority" />
      </div>

      <FormFooter submitText={entity ? "Update task" : "Add task"} onSubmit={add} onCancel={cancel} />
    </FormContainer>
  );
};
