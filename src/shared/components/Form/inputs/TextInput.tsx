import { Input } from "./Input";
import { InputCommonProps } from "./models/InputCommonProps";

export interface TextInputProps extends InputCommonProps {}

export const TextInput = (props: TextInputProps) => {
  return <Input type="text" {...props} />;
};
