import { useFormik } from "formik";

import { Select } from "shared/components/Form/Select/Select";
import { TextInput } from "shared/components/Form/inputs";
import { FormFooter } from "shared/components/Form/FormFooter";
import { FormContainer } from "shared/components/Form/FormContainer";
import { TFormErrorsState } from "App/types";
import { prioritySelectDataItems } from "App/static-data";

import { TaskFormValue } from "./models";

export interface ITaskFormProps {
  entity?: TaskFormValue;
  onSubmit: (value: TaskFormValue) => void;
  onCancel: () => void;
}

export const TaskForm = ({ entity, onSubmit, onCancel }: ITaskFormProps) => {
  const validate = (value: TaskFormValue) => {
    const state: TFormErrorsState<TaskFormValue> = {};

    if (!value.title) {
      state.title = (
        <span>
          <b>Title</b> is required
        </span>
      );
    }

    return state;
  };

  const form = useFormik({
    initialValues: entity || { ...new TaskFormValue() },
    validate,
    onSubmit: () => {
      onSubmit(form.values);
    },
  });

  const cancel = () => {
    form.resetForm();
    onCancel();
  };

  return (
    <FormContainer onSubmit={form.handleSubmit}>
      <div className="form-row">
        <TextInput
          id="title"
          label="Title"
          placeholder="Enter task title"
          isAutoFocus
          error={form.errors.title}
          {...form.getFieldProps("title")}
        />
      </div>

      <div className="form-row">
        <Select id="priority" label="Priority" data={prioritySelectDataItems} {...form.getFieldProps("priority")} />
      </div>

      <FormFooter submitText={entity ? "Update task" : "Add task"} onSubmit={form.handleSubmit} onCancel={cancel} />
    </FormContainer>
  );
};
