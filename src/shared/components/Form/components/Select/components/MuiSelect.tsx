import MuiRawSelect from "@mui/material/Select";
import { styled } from "@mui/material/styles";

export const MuiSelect = styled(MuiRawSelect)({
  "& .MuiSelect-select": {
    padding: "10px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "2px solid #a5a9b1",
    transition: "border 0.4s",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    border: "2px solid #5E81AC",
  },
});
