import MuiMenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";

export const MenuItem = styled(MuiMenuItem)({
  "&.Mui-selected": {
    backgroundColor: "#5E81AC",
    color: "#FFF",
  },
  "&.Mui-selected:hover": {
    backgroundColor: "#5E81AC",
  },
});
