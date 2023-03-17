import styled from "styled-components";

import { IHelperType } from "../models";

export const StyledHelperWrapper = styled.span<IHelperType>`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${({ type }) => {
    switch (type) {
      case "error":
        return "#bf616a";

      case "warning":
        return "#D08770";

      case "success":
        return "#A3BE8C";

      default:
        return "#5E81AC";
    }
  }};
  margin-top: 5px;
`;
