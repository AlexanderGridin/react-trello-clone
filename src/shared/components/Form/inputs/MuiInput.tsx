import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export const MuiInput = styled(TextField)({
  marginTop: "7px",

  "& .MuiFormLabel-root": {
    color: "#4C566A",

    "&.Mui-focused": {
      color: "#5E81AC",
    },

    "&.Mui-error": {
      color: "#BF616A",

      "&.Mui-focused": {
        color: "#BF616A",
      },
    },
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "2px solid #a5a9b1",
    },
    "&:hover fieldset": {
      border: "2px solid #5E81AC",
    },
    "&.Mui-focused fieldset": {
      border: "2px solid #5E81AC",
    },

    "&.Mui-error": {
      "& fieldset": {
        border: "2px solid #BF616A",
        color: "#BF616A",
      },
      "&:hover fieldset": {
        border: "2px solid #BF616A",
        color: "#BF616A",
      },
    },

    "&.Mui-focused.Mui-error fieldset": {
      border: "2px solid #BF616A",
      color: "#BF616A",
    },
  },
});
