import MuiCheckbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ChangeEvent } from "react";

const StyledCheckbox = styled(MuiCheckbox)({
  "& .MuiSvgIcon-root": {
    fill: "#a5a9b1",
  },

  "&.Mui-checked .MuiSvgIcon-root": {
    fill: "#5E81AC",
  },
});

export interface CheckboxProps {
  label?: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

export const Checkbox = ({ label = "", value, onChange }: CheckboxProps) => {
  const handleChange = (_e: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    onChange(checked);
  };

  return (
    <div style={{ marginTop: "-9px", marginBottom: "-9px" }}>
      <FormControlLabel control={<StyledCheckbox checked={value} onChange={handleChange} />} label={label} />
    </div>
  );
};
