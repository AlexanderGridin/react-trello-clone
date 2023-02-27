import { useReducer, useState } from "react";
import { Button } from "shared/components/Button/Button";
import { FormContainer } from "shared/components/Form/FormContainer";
import { PasswordInput, TextInput } from "shared/components/Form/inputs";
import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";
import style from "./CreateUserForm.module.css";

export class CreateUserFormValue {
  public userName = "";
  public password = "";
  public confirmPassword = "";
}

interface CreateUserFormProps {
  onCreate: (value: CreateUserFormValue) => void;
  onCancel: () => void;
}

export const CreateUserForm = ({ onCreate, onCancel }: CreateUserFormProps) => {
  const [isPasswordsMatch, setIsPasswordMatch] = useState(true);
  const [formValue, dispatch] = useReducer(
    (state: CreateUserFormValue, payload: Partial<CreateUserFormValue>) => ({
      ...state,
      ...payload,
    }),
    new CreateUserFormValue()
  );

  const handleUserNameChange = (userName: string) => dispatch({ userName });
  const handlePasswordChange = (password: string) => {
    dispatch({ password });

    if (formValue.confirmPassword && formValue.confirmPassword !== password) {
      setIsPasswordMatch(false);
    } else {
      setIsPasswordMatch(true);
    }
  };
  const handleConfirmPasswordChange = (confirmPassword: string) => {
    dispatch({ confirmPassword });

    if (formValue.password && formValue.password !== confirmPassword) {
      setIsPasswordMatch(false);
    } else {
      setIsPasswordMatch(true);
    }
  };

  const handleCreateUserClick = () => {
    const { userName, password, confirmPassword } = formValue;

    if (userName && password && confirmPassword && isPasswordsMatch) {
      onCreate(formValue);
    }
  };

  const handleCancelClick = () => {
    dispatch(new CreateUserFormValue());
    onCancel();
  };

  const passwordsValidationMessage = !isPasswordsMatch && (
    <div style={{ color: "#BF616A", fontSize: "14px", marginTop: "5px" }}>Passwords not match...</div>
  );

  return (
    <FormContainer>
      <div className="form-row">
        <TextInput placeholder="User name" onChange={handleUserNameChange} />
      </div>

      <div className="form-row">
        <PasswordInput placeholder="Password" onChange={handlePasswordChange} />
        {passwordsValidationMessage}
      </div>

      <div className="form-row">
        <PasswordInput placeholder="Confirm password" onChange={handleConfirmPasswordChange} />
        {passwordsValidationMessage}
      </div>

      <div className={style.footer}>
        <Button icon={MaterialIcon.AddUser} style={{ marginRight: "7px" }} onClick={handleCreateUserClick}>
          Create user
        </Button>

        <Button icon={MaterialIcon.Close} visualStyle="error" onClick={handleCancelClick}>
          Cancel
        </Button>
      </div>
    </FormContainer>
  );
};
