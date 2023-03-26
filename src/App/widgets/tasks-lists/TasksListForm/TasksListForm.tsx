import { Checkbox, TextInput, FormFooter, FormContainer } from "@alexandergridin/rtc-components-lib";
import { useFormik } from "formik";

import { TFormErrorsState } from "App/types";

import { TasksListFormValue } from "./models";

export interface ITasksListFormProps {
  entity?: TasksListFormValue;
  onSubmit: (value: TasksListFormValue) => void;
  onCancel: () => void;
}

export const TasksListForm = ({ entity, onSubmit, onCancel }: ITasksListFormProps) => {
  const validate = (value: TasksListFormValue) => {
    const state: TFormErrorsState<TasksListFormValue> = {};

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
    initialValues: entity || { ...new TasksListFormValue() },
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
          placeholder="Enter list title"
          isAutoFocus
          error={form.errors.title}
          {...form.getFieldProps("title")}
        />
      </div>

      <div className="form-row">
        <Checkbox id="isPinned" label="Pinned" {...form.getFieldProps("isPinned")} />
      </div>

      <FormFooter submitText={entity ? "Update list" : "Add list"} onSubmit={form.handleSubmit} onCancel={cancel} />
    </FormContainer>
  );
};
