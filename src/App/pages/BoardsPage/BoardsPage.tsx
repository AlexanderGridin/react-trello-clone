import styled from "styled-components";
import { AppPageLayout } from "App/components/AppPageLayout/AppPageLayout";
import { BoardsList } from "App/components/BoardsList/BoardsList";
import { useAppState } from "App/state/hooks/useAppState";

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
