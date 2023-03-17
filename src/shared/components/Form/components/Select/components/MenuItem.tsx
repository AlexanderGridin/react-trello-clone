import MuiMenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";

export const MenuItem = styled(MuiMenuItem)({
  "&.MuiMenuItem-gutters.Mui-selected": {
    backgroundColor: "#5E81AC",
    color: "#FFF",
  },
  "&.MuiMenuItem-gutters.Mui-selected:hover": {
    backgroundColor: "#5E81AC",
  },
});
