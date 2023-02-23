import TextField from "@mui/material/TextField";
import { ChangeEvent, ForwardedRef, forwardRef } from "react";
import { styled } from "@mui/material/styles";

export interface TextInputProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

type ChangeEventType = ChangeEvent<HTMLInputElement>;

const StyledTextField = styled(TextField)({
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

export const TextInput = forwardRef(
  ({ value, placeholder, onChange }: TextInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const change = (e: ChangeEventType) => {
      const value = e.target.value;
      onChange?.(value);
    };

    return (
      <StyledTextField
        inputRef={ref}
        size="small"
        fullWidth
        variant="outlined"
        placeholder={placeholder}
        value={value}
        onChange={change}
      />
    );
  }
);
