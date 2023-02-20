import { Button } from "shared/components/Button/Button";
import { ButtonStyle } from "shared/components/Button/enums/ButtonStyle";
import { FlexContainer } from "shared/components/FlexContainer";

interface FormFooterProps {
  submitText?: string;
  cancelText?: string;
  onSubmit: () => void;
  onCancel: () => void;
}

export const FormFooter = ({ submitText = "Submit", cancelText = "Cancel", onSubmit, onCancel }: FormFooterProps) => {
  return (
    <FlexContainer>
      <Button buttonStyle={ButtonStyle.Success} onClick={onSubmit}>
        {submitText}
      </Button>

      <Button buttonStyle={ButtonStyle.Danger} onClick={onCancel}>
        {cancelText}
      </Button>
    </FlexContainer>
  );
};
