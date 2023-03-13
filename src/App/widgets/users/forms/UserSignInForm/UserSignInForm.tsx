import { useFormik } from "formik";
import { TFormErrorsState } from "App/types";

import { Button } from "shared/components/Button/Button";
import { FormContainer } from "shared/components/Form/FormContainer";
import { PasswordInput, TextInput } from "shared/components/Form/inputs";
import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";
import { UserSignInFormValue } from "..";
import style from "./UserSignInForm.module.css";

interface IUserSignInFormProps {
  onSubmit: (value: UserSignInFormValue) => void;
  onCancel: () => void;
}

export const UserSignInForm = ({ onSubmit, onCancel }: IUserSignInFormProps) => {
  const validate = (value: UserSignInFormValue) => {
    const state: TFormErrorsState<UserSignInFormValue> = {};

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

    return state;
  };
  const form = useFormik({
    initialValues: { ...new UserSignInFormValue() },
    validate,
    onSubmit: () => {
      if (!form.values.userName || !form.values.password) {
        return;
      }

      onSubmit(form.values);
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
          placeholder="Password"
          label="Password"
          error={form.touched.password ? form.errors.password : ""}
          {...form.getFieldProps("password")}
        />
      </div>

      <div className={style.footer}>
        <Button icon={MaterialIcon.Login} style={{ marginRight: "7px" }} onClick={form.handleSubmit}>
          Sign in
        </Button>

        <Button icon={MaterialIcon.Close} visualStyle="error" onClick={handleCancelClick}>
          Cancel
        </Button>
      </div>
    </FormContainer>
  );
};
