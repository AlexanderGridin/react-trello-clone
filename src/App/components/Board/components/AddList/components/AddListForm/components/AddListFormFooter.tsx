import { ErrorButton } from "shared/components/Buttons/ErrorButton";
import { SuccessButton } from "shared/components/Buttons/SuccessButton";
import { FlexContainer } from "shared/components/FlexContainer";
import { ButtonType } from "shared/enums/ButtonType";

interface AddListFormFooterProps {
  onAdd: () => void;
  onCancel: () => void;
}

export const AddListFormFooter = ({
  onAdd,
  onCancel,
}: AddListFormFooterProps): JSX.Element => {
  return (
    <FlexContainer>
      <SuccessButton type={ButtonType.Button} onClick={onAdd}>
        Add
      </SuccessButton>
      <ErrorButton type={ButtonType.Button} onClick={onCancel}>
        Cancel
      </ErrorButton>
    </FlexContainer>
  );
};
