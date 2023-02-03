import { Button } from "shared/components/Button/Button";
import { ButtonStyle } from "shared/components/Button/enums/ButtonStyle";
import { FlexContainer } from "shared/components/FlexContainer";

interface AddItemFormFooterProps {
  onAdd: () => void;
  onCancel: () => void;
}

export const AddItemFormFooter = ({
  onAdd,
  onCancel,
}: AddItemFormFooterProps) => {
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
