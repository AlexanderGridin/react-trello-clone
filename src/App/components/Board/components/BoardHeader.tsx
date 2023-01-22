import styled from "styled-components";

const BoardTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: 1.5rem;
  line-height: 1.3;
  color: #fff;
  margin: 0;
`;

const BoardHeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 20px;
`;

interface BoardHeaderProps {
  title: string;
}

export const BoardHeader = ({ title }: BoardHeaderProps) => {
  return (
    <BoardHeaderContainer>
      <BoardTitle>{title}</BoardTitle>
    </BoardHeaderContainer>
  );
};
