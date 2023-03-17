import { Input } from "./Input";
import { IInputCommonProps } from "./models";

export interface IPasswordInputProps extends IInputCommonProps {}

export const PasswordInput = (props: IPasswordInputProps) => {
  return <Input type="password" {...props} />;
};
