import { useInputFocus } from "shared/hooks/useInputFocus";
import { Helper } from "../Helper/Helper";
import { InputCommonProps } from "./models/InputCommonProps";
import { MuiInput } from "./MuiInput";

interface InputProps extends InputCommonProps {
  type: "text" | "password" | "number";
}

export const Input = ({ error = "", isAutoFocus, ...inputProps }: InputProps) => {
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
