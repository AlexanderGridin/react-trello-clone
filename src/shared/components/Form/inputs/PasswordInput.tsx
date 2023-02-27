import { Input } from "./Input";
import { InputCommonProps } from "./models/InputCommonProps";

export interface PasswordInputProps extends InputCommonProps {}

export const PasswordInput = (props: PasswordInputProps) => {
  return <Input type="password" {...props} />;
};
