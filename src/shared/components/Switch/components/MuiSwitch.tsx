import { styled } from "@mui/material";
import Switch, { SwitchProps } from "@mui/material/Switch";

const switchHeight = 30;

export const MuiSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(() => ({
  width: 72,
  height: switchHeight,
  padding: 0,

  "& + .MuiFormControlLabel-label": {
    marginLeft: 7,
    fontSize: 18,
  },

  "& .MuiSwitch-switchBase": {
    padding: 0,
    top: "50%",
    transform: "translate(4px, -50%)",
    transitionDuration: "400ms",

    "&.Mui-checked": {
      transform: "translate(46px, -50%)",
      color: "#fff",

      "& + .MuiSwitch-track": {
        backgroundColor: "#5E81AC",
        opacity: 1,
        border: 0,
      },

      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },

    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#5E81AC",
      border: "6px solid #fff",
    },

    "&.Mui-disabled .MuiSwitch-thumb": {
      color: "#FFF",
    },

    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.3,
    },
  },

  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },

  "& .MuiSwitch-track": {
    borderRadius: switchHeight / 2,
    backgroundColor: "#d7dde8",
    opacity: 1,
    transition: "background-color 0.4s",
  },
}));
