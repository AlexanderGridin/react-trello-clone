import { useFormik } from "formik";
import { FormErrorsState } from "App/types/FormErrorsState";

import { Button } from "shared/components/Button/Button";
import { FormContainer } from "shared/components/Form/FormContainer";
import { PasswordInput, TextInput } from "shared/components/Form/inputs";
import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";
import { CreateUserFormValue } from "..";
import style from "./CreateUserForm.module.css";

interface CreateUserFormProps {
  onCreate: (value: CreateUserFormValue) => void;
  onCancel: () => void;
}

export const CreateUserForm = ({ onCreate, onCancel }: CreateUserFormProps) => {
  const validate = (value: CreateUserFormValue) => {
    const state: FormErrorsState<CreateUserFormValue> = {};

    if (!value.userName) {
      state.userName = (
        <span>
          <b>User name</b> is required
        </span>
      );
    }

    if (!value.password) {
      state.password = (
        <span>
          <b>Password</b> is required
        </span>
      );
    }

    if (!value.confirmPassword) {
      state.confirmPassword = (
        <span>
          <b>Password confirmation</b> is required
        </span>
      );
    }

    if (value.password && value.confirmPassword && value.password !== value.confirmPassword) {
      state.password = "Passwords not match";
      state.confirmPassword = "Passwords not match";
    }

    return state;
  };
  const form = useFormik({
    initialValues: { ...new CreateUserFormValue() },
    validate,
    onSubmit: () => {
      onCreate(form.values);
    },
  });

  const handleCancelClick = () => {
    form.resetForm();
    onCancel();
  };

  return (
    <FormContainer>
      <div className="form-row">
        <TextInput
          id="userName"
          placeholder="User name"
          isAutoFocus
          label="User name"
          error={form.touched.userName ? form.errors.userName : ""}
          {...form.getFieldProps("userName")}
        />
      </div>

      <div className="form-row">
        <PasswordInput
          id="password"
          placeholder="Enter password"
          label="Password"
          error={form.touched.password ? form.errors.password : ""}
          {...form.getFieldProps("password")}
        />
      </div>

      <div className="form-row">
        <PasswordInput
          id="confirmPassword"
          placeholder="Confirm password"
          label="Confirm password"
          error={form.touched.confirmPassword ? form.errors.confirmPassword : ""}
          {...form.getFieldProps("confirmPassword")}
        />
      </div>

      <div className={style.footer}>
        <Button icon={MaterialIcon.AddUser} style={{ marginRight: "7px" }} onClick={form.handleSubmit}>
          Create user
        </Button>

        <Button icon={MaterialIcon.Close} visualStyle="error" onClick={handleCancelClick}>
          Cancel
        </Button>
      </div>
    </FormContainer>
  );
};
