import styled from "styled-components";

interface CardContainerProps {
  backgroundColor?: string;
}

export const CardContainer = styled.div<CardContainerProps>`
  cursor: pointer;
  padding: 7px 12px;
  border-radius: 3px;
  background-color: ${({ backgroundColor }) => backgroundColor || "#FFF"};
  box-shadow: #091e4240 0px 1px 0px 0px;
`;
