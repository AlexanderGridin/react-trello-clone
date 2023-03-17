import { Input } from "./Input";
import { IInputCommonProps } from "./models";

export interface ITextInputProps extends IInputCommonProps {}

export const TextInput = (props: ITextInputProps) => {
  return <Input type="text" {...props} />;
};
