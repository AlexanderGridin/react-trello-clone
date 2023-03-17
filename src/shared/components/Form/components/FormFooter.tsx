import { Button } from "shared/components/Button";
import { StyledFlexRow } from "shared/components/StyledFlexRow";

interface IFormFooterProps {
  submitText?: string;
  cancelText?: string;
  onSubmit: () => void;
  onCancel: () => void;
}

export const FormFooter = ({ submitText = "Submit", cancelText = "Cancel", onSubmit, onCancel }: IFormFooterProps) => {
  return (
    <StyledFlexRow>
      <Button style={{ marginRight: "7px" }} onClick={onSubmit}>
        {submitText}
      </Button>

      <Button visualStyle="error" onClick={onCancel}>
        {cancelText}
      </Button>
    </StyledFlexRow>
  );
};
