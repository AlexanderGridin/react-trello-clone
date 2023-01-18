import styled from "styled-components";

export const IconContainer = styled.span<{ dark?: boolean }>`
  color: ${({ dark }) => (dark ? "black" : "white")};
  font-size: 1rem;
  line-height: 1;
  display: block;
`;
