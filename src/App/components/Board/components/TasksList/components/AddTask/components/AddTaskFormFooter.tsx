import { ErrorButton } from "shared/components/Buttons/ErrorButton";
import { FlexContainer } from "shared/components/FlexContainer";
import { SuccessButton } from "shared/components/Buttons/SuccessButton";

interface AddTaskFormFooterProps {
  onAdd: () => void;
  onCancel: () => void;
}

export const AddTaskFormFooter = ({
  onAdd,
  onCancel,
}: AddTaskFormFooterProps): JSX.Element => {
  return (
    <FlexContainer>
      <SuccessButton onClick={onAdd}>Add</SuccessButton>
      <ErrorButton onClick={onCancel}>Cancel</ErrorButton>
    </FlexContainer>
  );
};
