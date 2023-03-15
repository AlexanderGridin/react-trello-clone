import { useState } from "react";

export const useSwitch = (initialValue = false): [boolean, () => void, () => void] => {
  const [value, setValue] = useState(initialValue);

  const turnOn = () => setValue(true);
  const turnOff = () => setValue(false);

  return [value, turnOn, turnOff];
};
