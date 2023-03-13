import MuiDialog from "@mui/material/Dialog";
import MuiDialogContent from "@mui/material/DialogContent";
import MuiDialogTitle from "@mui/material/DialogTitle";
import { Spinner } from "shared/components/Spinner/Spinner";
import { IChildren, ITestId } from "shared/models";
import { ModalTestId } from "./static-data/ModalTestId";

interface IModalProps extends IChildren, ITestId {
  title?: string;
  open?: boolean;
  isLoading?: boolean;
  onClose?: () => void;
}

export const Modal = ({
  title = "",
  open = false,
  isLoading = false,
  children,
  "data-testid": testId,
  onClose,
}: IModalProps) => {
  return (
    <MuiDialog data-testid={testId} open={open} maxWidth="sm" fullWidth onClose={onClose}>
      {title && <MuiDialogTitle data-testid={ModalTestId.Title}>{title}</MuiDialogTitle>}
      {children && <MuiDialogContent data-testid={ModalTestId.Content}>{children}</MuiDialogContent>}
      {isLoading && <Spinner data-testid={ModalTestId.Spinner} backgroundColor="#FFF" />}
    </MuiDialog>
  );
};
