import MuiInputLabel from "@mui/material/InputLabel";
import MuiMenuItem from "@mui/material/MenuItem";
import MuiFormControl from "@mui/material/FormControl";
import MuiSelect, { SelectChangeEvent } from "@mui/material/Select";

export interface SelectDataItem {
  name: string;
  value: string;
}

interface SelectProps {
  value?: string;
  label?: string;
  data?: SelectDataItem[];
  onChange?: (value: string) => void;
}

export const Select = ({ value, label, data = [], onChange }: SelectProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange?.(event.target.value);
  };

  return (
    <MuiFormControl fullWidth>
      {label && <MuiInputLabel id="demo-simple-select-standard-label">{label}</MuiInputLabel>}

      <MuiSelect value={value} label={label} onChange={handleChange}>
        {data.map((item: SelectDataItem, index: number) => (
          <MuiMenuItem key={index} value={item.value}>
            {item.name}
          </MuiMenuItem>
        ))}
      </MuiSelect>
    </MuiFormControl>
  );
};
