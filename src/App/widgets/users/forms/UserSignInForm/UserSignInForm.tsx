import { useReducer } from "react";
import { Button } from "shared/components/Button/Button";
import { FormContainer } from "shared/components/Form/FormContainer";
import { PasswordInput, TextInput } from "shared/components/Form/inputs";
import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";
import style from "./UserSignInForm.module.css";

export class UserSignInFormValue {
  public userName = "";
  public password = "";
}

interface UserSignInFormProps {
  onSubmit: (value: UserSignInFormValue) => void;
  onCancel: () => void;
}

export const UserSignInForm = ({ onSubmit, onCancel }: UserSignInFormProps) => {
  const [formValue, dispatch] = useReducer(
    (state: UserSignInFormValue, payload: Partial<UserSignInFormValue>) => ({
      ...state,
      ...payload,
    }),
    new UserSignInFormValue()
  );

  const handleUserNameChange = (userName: string) => dispatch({ userName });
  const handlePasswordChange = (password: string) => dispatch({ password });

  const handleSignInClick = () => {
    if (!formValue.userName || !formValue.password) {
      return;
    }

    onSubmit(formValue);
  };

  const handleCancelClick = () => {
    dispatch(new UserSignInFormValue());
    onCancel();
  };

  return (
    <FormContainer>
      <div className="form-row">
        <TextInput placeholder="User name" onChange={handleUserNameChange} />
      </div>

      <div className="form-row">
        <PasswordInput placeholder="Password" onChange={handlePasswordChange} />
      </div>

      <div className={style.footer}>
        <Button icon={MaterialIcon.Login} style={{ marginRight: "7px" }} onClick={handleSignInClick}>
          Sign in
        </Button>

        <Button icon={MaterialIcon.Close} visualStyle="error" onClick={handleCancelClick}>
          Cancel
        </Button>
      </div>
    </FormContainer>
  );
};
