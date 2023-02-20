import MuiButton from "@mui/material/Button";
import { PropsWithChildren } from "react";
import { styled } from "@mui/material/styles";

const ButtonContainer = styled(MuiButton)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: "16px",
  fontWeight: "400",
});

const SuccessButton = styled(ButtonContainer)({
  backgroundColor: "#A3BE8C",

  "&:hover": {
    backgroundColor: "#A3BE8C",
  },
});

const ErrorButton = styled(ButtonContainer)({
  backgroundColor: "#BF616A",

  "&:hover": {
    backgroundColor: "#BF616A",
  },
});

interface ButtonProps extends PropsWithChildren {
  visualStyle?: "success" | "error";
  className?: string;
  onClick: () => void;
}

export const Button = ({ visualStyle, children, className = "", onClick }: ButtonProps) => {
  switch (visualStyle) {
    case "success":
      return (
        <SuccessButton variant="contained" size="small" onClick={onClick} className={className}>
          {children}
        </SuccessButton>
      );

    case "error":
      return (
        <ErrorButton variant="contained" size="small" onClick={onClick} className={className}>
          {children}
        </ErrorButton>
      );

    default:
      return (
        <MuiButton variant="contained" size="small" onClick={onClick} className={className}>
          {children}
        </MuiButton>
      );
  }
};
