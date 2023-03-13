import MuiAlert from "@mui/material/Alert";
import MuiAlertTitle from "@mui/material/AlertTitle";
import { IChildren, IClassName } from "shared/models";
import { MaterialIcon } from "../Icon/enums/MaterialIcon";
import { IconButton } from "../IconButton/IconButton";
import style from "./Alert.module.css";

interface IAlertProps extends IChildren, IClassName {
  title?: string;
  type?: "error" | "warning" | "info" | "success";
  onClose?: () => void;
}

export const Alert = ({ title, type = "info", className = "", children, onClose }: IAlertProps) => {
  const handleCloseClick = () => {
    onClose?.();
  };

  return (
    <MuiAlert severity={type} className={className} sx={{ position: "relative" }}>
      {title && <MuiAlertTitle>{title}</MuiAlertTitle>}
      {children}
      <IconButton
        icon={MaterialIcon.Close}
        color="#bf616a"
        activeColor="#bf616a"
        className={style.close}
        onClick={handleCloseClick}
      />
    </MuiAlert>
  );
};
