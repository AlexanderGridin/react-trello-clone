import { useFormik } from "formik";
import { prioritySelectDataItems } from "App/static-data/prioritySelectDataItems";
import { FormContainer } from "shared/components/Form/FormContainer";
import { FormFooter } from "shared/components/Form/FormFooter";
import { TextInput } from "shared/components/Form/inputs";
import { Select } from "shared/components/Form/Select/Select";
import { TaskFormValue } from "./models";
import { FormErrorsState } from "App/types/FormErrorsState";

export interface TaskFormProps {
  entity?: TaskFormValue;
  onSubmit: (value: TaskFormValue) => void;
  onCancel: () => void;
}

export const TaskForm = ({ entity, onSubmit, onCancel }: TaskFormProps) => {
  const validate = (value: TaskFormValue) => {
    const state: FormErrorsState<TaskFormValue> = {};

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
