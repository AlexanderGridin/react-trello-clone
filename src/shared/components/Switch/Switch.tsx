import { useState } from "react";
import MuiFormControlLabel from "@mui/material/FormControlLabel";

import { MuiSwitch } from "./components";
import { SwitchTestId } from "./static-data";

interface ISwitchProps {
  initialValue?: boolean;
  label?: string;
  disabled?: boolean;
  isTextDark?: boolean;
  onChange: (value: boolean) => void;
}

export const Switch = ({
  label = "",
  initialValue = false,
  disabled = false,
  isTextDark = true,
  onChange,
}: ISwitchProps) => {
  const [checked, setChecked] = useState(initialValue);

  const change = () => {
    const newValue = !checked;
    setChecked(newValue);
    onChange(newValue);
  };

  const control = <MuiSwitch data-testid={SwitchTestId.Switch} checked={checked} onChange={change} />;

  return (
    <MuiFormControlLabel
      disabled={disabled}
      sx={{ marginLeft: 0, color: isTextDark ? "#000" : "#FFF" }}
      control={control}
      label={label}
    />
  );
};
