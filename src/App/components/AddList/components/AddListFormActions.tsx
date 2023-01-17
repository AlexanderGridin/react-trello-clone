import { ErrorButton, SuccessButton, FlexContainer } from "styles";

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
