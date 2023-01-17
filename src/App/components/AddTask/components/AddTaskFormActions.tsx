import { ErrorButton, SuccessButton, FlexContainer } from "styles";

interface AddTaskFormActionsProps {
  onAdd: () => void;
  onCancel: () => void;
}

export const AddTaskFormActions = ({
  onAdd,
  onCancel,
}: AddTaskFormActionsProps): JSX.Element => {
  return (
    <FlexContainer>
      <SuccessButton onClick={onAdd}>Add</SuccessButton>
      <ErrorButton onClick={onCancel}>Cancel</ErrorButton>
    </FlexContainer>
  );
};
