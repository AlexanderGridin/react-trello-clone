import styled from "styled-components";
import { AppPageLayout } from "App/components/AppPageLayout/AppPageLayout";
import { useAppState } from "App/state/hooks/useAppState";
import { BoardsList } from "App/widgets/BoardsList/BoardsList";

const BoardsPageTitle = styled.h2`
  margin: 0;
  padding: 12px;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
`;

export const BoardsPage = () => {
  const { boards } = useAppState();

  return (
    <AppPageLayout slotHeader={<BoardsPageTitle>Boards</BoardsPageTitle>}>
      <BoardsList boards={boards} />
    </AppPageLayout>
  );
};
