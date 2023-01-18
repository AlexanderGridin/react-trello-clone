import { ErrorButton } from "shared/components/Buttons/ErrorButton";
import { SuccessButton } from "shared/components/Buttons/SuccessButton";
import { FlexContainer } from "shared/components/FlexContainer";

interface AddListFormActionsProps {
  onAdd: () => void;
  onCancel: () => void;
}

export const AddListFormActions = ({
  onAdd,
  onCancel,
}: AddListFormActionsProps): JSX.Element => {
  return (
    <FlexContainer>
      <SuccessButton onClick={onAdd}>Add</SuccessButton>
      <ErrorButton onClick={onCancel}>Cancel</ErrorButton>
    </FlexContainer>
  );
};
