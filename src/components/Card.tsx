import { useAppState } from "hooks/useAppState";
import { Icon } from "shared/enums/Icon";
import { removeTask } from "state/actions/task/removeTask";
import styled from "styled-components";
import { CardContainer, ErrorButton, FlexContainer } from "styles";
import { MaterialIcon } from "./MaterialIcon";

interface CardProps {
  id: string;
  listId: string;
  content: string;
}

const CardContent = styled.div`
  margin-right: 7px;
`;

const RemoveCardButton = styled(ErrorButton)`
  margin-left: auto;
  margin-right: 0;
  padding: 6px;
`;

export const Card = ({ id, listId, content }: CardProps): JSX.Element => {
  const { dispatch } = useAppState();
  const removeCurrentCard = () => dispatch(removeTask(listId, id));

  return (
    <CardContainer>
      <FlexContainer>
        <CardContent>{content}</CardContent>

        <RemoveCardButton onClick={removeCurrentCard}>
          <MaterialIcon icon={Icon.Delete} />
        </RemoveCardButton>
      </FlexContainer>
    </CardContainer>
  );
};
