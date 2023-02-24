import MuiDialog from "@mui/material/Dialog";
import MuiDialogContent from "@mui/material/DialogContent";
import MuiDialogTitle from "@mui/material/DialogTitle";
import { Spinner } from "shared/components/Spinner/Spinner";
import { Children } from "shared/models/Children";

interface ModalProps extends Children {
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
