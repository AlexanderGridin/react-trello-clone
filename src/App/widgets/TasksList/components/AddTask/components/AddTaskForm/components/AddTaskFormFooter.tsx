import { Button } from "shared/components/Button/Button";
import { ButtonStyle } from "shared/components/Button/enums/ButtonStyle";
import { FlexContainer } from "shared/components/FlexContainer";

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
      <Button buttonStyle={ButtonStyle.Success} onClick={onAdd}>
        Add
      </Button>

      <Button buttonStyle={ButtonStyle.Danger} onClick={onCancel}>
        Cancel
      </Button>
    </FlexContainer>
  );
};
