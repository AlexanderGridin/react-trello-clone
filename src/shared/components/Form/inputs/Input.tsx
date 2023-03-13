import { useInputFocus } from "shared/hooks/useInputFocus";
import { Helper } from "../Helper/Helper";
import { IInputCommonProps } from "./models";
import { MuiInput } from "./MuiInput";

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
