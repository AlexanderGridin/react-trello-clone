import { ChangeEvent } from "react";
import { styled } from "@mui/material/styles";
import MuiCheckbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const StyledCheckbox = styled(MuiCheckbox)({
  "& .MuiSvgIcon-root": {
    fill: "#a5a9b1",
  },

  "&.Mui-checked .MuiSvgIcon-root": {
    fill: "#5E81AC",
  },
});

export interface ICheckboxProps {
  id: string;
  name: string;
  label?: string;
  value: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({ label, value, ...checkboxProps }: ICheckboxProps) => {
  return (
    <div style={{ marginTop: "-9px", marginBottom: "-9px" }}>
      <FormControlLabel control={<StyledCheckbox checked={value} {...checkboxProps} />} label={label} />
    </div>
  );
};
