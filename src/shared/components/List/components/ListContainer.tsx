import styled from "styled-components";

export const ListContainer = styled.div`
  width: 300px;
  min-height: 40px;
  border-radius: 3px;
  padding: 8px;
  flex-grow: 0;
  flex-shrink: 0;
  background-color: #ebecf0;
`;

// Extending styles in styled components
export const ListContainerTransparent = styled(ListContainer)`
  background: none;
  padding: 0;
  margin-right: 0;
`;
