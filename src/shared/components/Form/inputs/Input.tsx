import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { useInputFocus } from "shared/hooks/useInputFocus";
import { InputChangeEvent } from "./models/InputChangeEvent";
import { InputCommonProps } from "./models/InputCommonProps";

export const MuiInput = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
    "& .MuiInputBase-input": {
      border: "2px solid #a5a9b1",
      borderRadius: "3px",
      transition: "border 0.4s",
    },
    "&:hover .MuiInputBase-input": {
      border: "2px solid #5E81AC",
    },
    "&.Mui-focused .MuiInputBase-input": {
      border: "2px solid #5E81AC",
    },
  },
});

interface InputProps extends InputCommonProps {
  type: "text" | "password" | "number";
}

export const Input = ({ type, isAutoFocus, placeholder, value, onChange }: InputProps) => {
  const focusRef = useInputFocus();

  const handleChange = (e: InputChangeEvent) => {
    const value = e.target.value;
    onChange?.(value);
  };

  return (
    <MuiInput
      type={type}
      inputRef={isAutoFocus ? focusRef : null}
      size="small"
      fullWidth
      variant="outlined"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};
