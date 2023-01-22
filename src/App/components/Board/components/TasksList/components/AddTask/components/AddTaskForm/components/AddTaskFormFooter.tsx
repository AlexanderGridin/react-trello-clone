import { ErrorButton } from "shared/components/Buttons/ErrorButton";
import { FlexContainer } from "shared/components/FlexContainer";
import { SuccessButton } from "shared/components/Buttons/SuccessButton";
import { ButtonType } from "shared/enums/ButtonType";

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
      <SuccessButton type={ButtonType.Button} onClick={onAdd}>
        Add
      </SuccessButton>
      <ErrorButton type={ButtonType.Button} onClick={onCancel}>
        Cancel
      </ErrorButton>
    </FlexContainer>
  );
};
