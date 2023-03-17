import { Helper } from "../Helper";
import { MuiInput } from "./MuiInput";
import { useInputFocus } from "../../hooks";
import { IInputCommonProps } from "./models";

interface IInputProps extends IInputCommonProps {
  type: "text" | "password" | "number";
}

export const Input = ({ error = "", isAutoFocus, ...inputProps }: IInputProps) => {
  const focusRef = useInputFocus();

  return (
    <>
      <MuiInput
        error={!!error}
        inputRef={isAutoFocus ? focusRef : null}
        size="small"
        fullWidth
        variant="outlined"
        {...inputProps}
      />
      {error && <Helper type="error">{error}</Helper>}
    </>
  );
};
