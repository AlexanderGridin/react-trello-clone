import MuiInputLabel from "@mui/material/InputLabel";
import MuiFormControl from "@mui/material/FormControl";
import { SelectChangeEvent } from "@mui/material/Select";
import { ReactNode } from "react";
import { MuiSelect } from "./components/MuiSelect";
import { MenuItem } from "./components/MenuItem";
import { SelectDataItem } from "./models/SelectDataItem";

interface SelectProps {
  value?: string;
  label?: string;
  data?: SelectDataItem[];
  onChange?: (value: string) => void;
}

export const Select = ({ value, label, data = [], onChange }: SelectProps) => {
  const handleChange = (event: SelectChangeEvent<unknown>, _child: ReactNode) => {
    onChange?.(event.target.value as string);
  };

  return (
    <MuiFormControl fullWidth>
      {label && <MuiInputLabel id="demo-simple-select-standard-label">{label}</MuiInputLabel>}

      <MuiSelect value={value} label={label} onChange={handleChange}>
        {data.map((item: SelectDataItem, index: number) => (
          <MenuItem key={index} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </MuiSelect>
    </MuiFormControl>
  );
};
