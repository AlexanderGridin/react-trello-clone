import { PropsWithChildren } from "react";
import MuiDialog from "@mui/material/Dialog";
import MuiDialogContent from "@mui/material/DialogContent";
import MuiDialogTitle from "@mui/material/DialogTitle";
import { Spinner } from "shared/components/Spinner/Spinner";

interface ModalProps extends PropsWithChildren {
  title?: string;
  open?: boolean;
  isLoading?: boolean;
  onClose?: () => void;
}

export const Modal = ({ title = "", open = false, isLoading = false, children, onClose }: ModalProps) => {
  return (
    <MuiDialog open={open} maxWidth="sm" fullWidth onClose={onClose}>
      {title && <MuiDialogTitle>{title}</MuiDialogTitle>}
      <MuiDialogContent>{children}</MuiDialogContent>
      {isLoading && <Spinner backgroundColor="#FFF" />}
    </MuiDialog>
  );
};
