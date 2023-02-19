import styled from "styled-components";

interface CardContainerProps {
  minHeight?: number;
  backgroundColor?: string;
}

export const CardContainer = styled.div<CardContainerProps>`
  padding: 12px;
  border-radius: 3px;
  background-color: ${({ backgroundColor }) => backgroundColor || "#FFF"};
  min-height: ${({ minHeight }) => (minHeight ? `${minHeight}px` : "auto")};
  box-shadow: #091e4240 0px 1px 0px 0px;
  position: relative;
  overflow: hidden;
`;
