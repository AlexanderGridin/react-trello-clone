import styled from "styled-components";

interface IStyledCardProps {
  minHeight?: number;
  backgroundColor?: string;
  isHasChildren?: boolean;
}

export const StyledCard = styled.div<IStyledCardProps>`
  padding: 12px;
  border-radius: 3px;
  background-color: ${({ backgroundColor }) => backgroundColor || "#FFF"};
  min-height: ${({ minHeight }) => (minHeight ? `${minHeight}px` : "auto")};
  box-shadow: #091e4240 0px 1px 0px 0px;
  position: relative;
  overflow: hidden;
  display: ${({ isHasChildren = false }) => (isHasChildren ? "block" : "flex")};
  ${({ isHasChildren = false }) => (isHasChildren ? null : "align-items: flex-start; flex-direction: column;")}
`;
