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
      borderColor: "#a5a9b1",
    },
    "&:hover fieldset": {
      borderColor: "#5E81AC",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#5E81AC",
    },
  },
});

export const TextInput = forwardRef(
  (
    { placeholder, onChange }: TextInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
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
        onChange={change}
      />
    );
  }
);
