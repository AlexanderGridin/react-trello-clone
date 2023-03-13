import MuiInputLabel from "@mui/material/InputLabel";
import MuiFormControl from "@mui/material/FormControl";
import { SelectChangeEvent } from "@mui/material/Select";
import { ChangeEvent, ReactNode } from "react";
import { MuiSelect } from "./components/MuiSelect";
import { MenuItem } from "./components/MenuItem";
import { ISelectDataItem } from "./models";

interface ISelectProps {
  id: string;
  name: string;
  value: string;
  label?: string;
  data: ISelectDataItem[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Select = ({ id, name, value, label, data, onChange }: ISelectProps) => {
  const handleChange = (event: SelectChangeEvent<unknown>, _child: ReactNode) => {
    onChange(event as ChangeEvent<HTMLInputElement>);
  };

  return (
    <MuiFormControl fullWidth>
      {label && <MuiInputLabel id={`${id}__label`}>{label}</MuiInputLabel>}

      <MuiSelect id={id} name={name} value={value} label={label} onChange={handleChange}>
        {data.map((item: ISelectDataItem, index: number) => (
          <MenuItem key={index} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </MuiSelect>
    </MuiFormControl>
  );
};
