import { useFormik } from "formik";

import { FormContainer } from "shared/components/Form/FormContainer";
import { TextInput } from "shared/components/Form/inputs";
import { Checkbox } from "shared/components/Form/Checkbox";
import { FormFooter } from "shared/components/Form/FormFooter";
import { BoardFormValue } from "./models/BoardFormValue";
import { TFormErrorsState } from "App/types";

export interface IBoardFormProps {
  entity?: BoardFormValue;
  onSubmit: (value: BoardFormValue) => void;
  onCancel: () => void;
}

export const BoardForm = ({ entity, onSubmit, onCancel }: IBoardFormProps) => {
  const validate = (value: BoardFormValue) => {
    const state: TFormErrorsState<BoardFormValue> = {};

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
    initialValues: entity || { ...new BoardFormValue() },
    validate,
    onSubmit: (): void => onSubmit(form.values),
  });

  const handleCancel = () => {
    form.resetForm();
    onCancel();
  };

  return (
    <FormContainer onSubmit={form.handleSubmit}>
      <div className="form-row">
        <TextInput
          id="title"
          label="Title"
          isAutoFocus
          placeholder="Enter board title"
          error={form.errors.title}
          {...form.getFieldProps("title")}
        />
      </div>

      <div className="form-row">
        <Checkbox id="isFavorite" label="Favorite" {...form.getFieldProps("isFavorite")} />
      </div>

      <FormFooter
        submitText={entity ? "Update board" : "Add board"}
        onSubmit={form.handleSubmit}
        onCancel={handleCancel}
      />
    </FormContainer>
  );
};
