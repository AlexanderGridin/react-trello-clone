import { Button } from "shared/components/Button/Button";
import { FlexContainer } from "shared/components/FlexContainer";

interface IFormFooterProps {
  submitText?: string;
  cancelText?: string;
  onSubmit: () => void;
  onCancel: () => void;
}

export const FormFooter = ({ submitText = "Submit", cancelText = "Cancel", onSubmit, onCancel }: IFormFooterProps) => {
  return (
    <FlexContainer>
      <Button style={{ marginRight: "7px" }} onClick={onSubmit}>
        {submitText}
      </Button>

      <Button visualStyle="error" onClick={onCancel}>
        {cancelText}
      </Button>
    </FlexContainer>
  );
};
