import { ErrorButton } from "shared/components/Buttons/ErrorButton";
import { FlexContainer } from "shared/components/FlexContainer";
import { SuccessButton } from "shared/components/Buttons/SuccessButton";

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
