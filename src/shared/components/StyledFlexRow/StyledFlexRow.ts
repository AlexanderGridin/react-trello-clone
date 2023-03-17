import styled from "styled-components";

type TAlign = "left" | "center" | "right";

export const StyledFlexRow = styled.div<{ align?: TAlign }>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: ${({ align = "left" }) => {
    switch (align) {
      case "left":
        return "flex-start";

      case "right":
        return "flex-end";

      default:
        return align;
    }
  }};
`;
