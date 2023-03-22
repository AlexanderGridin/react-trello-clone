import MuiAlert from "@mui/material/Alert";
import MuiAlertTitle from "@mui/material/AlertTitle";

import { IChildren, IClassName } from "shared/models";

import { IconButton } from "../IconButton";
import { MaterialIcon } from "../Icon";

import { TAlertType } from "./types";
import { getCloseButtonColor } from "./utils";

import style from "./Alert.module.css";

interface IAlertProps extends IChildren, IClassName {
  title?: string;
  type?: TAlertType;
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
      {onClose && (
        <IconButton
          icon={MaterialIcon.Close}
          color={getCloseButtonColor(type)}
          activeColor={getCloseButtonColor(type)}
          className={style.close}
          onClick={handleCloseClick}
        />
      )}
    </MuiAlert>
  );
};
