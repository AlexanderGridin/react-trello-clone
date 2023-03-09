import styled from "styled-components";
import { Icon } from "shared/components/Icon/Icon";
import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";
import { Children } from "shared/models/Children";
import style from "./Helper.module.css";

interface HelperType {
  type?: "regular" | "warning" | "error" | "success";
}

const Container = styled.span<HelperType>`
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

interface HelperProps extends Children, HelperType {}

export const Helper = ({ type = "regular", children }: HelperProps) => {
  return (
    <Container type={type}>
      <Icon icon={MaterialIcon.Error} className={style.icon} />
      {children}
    </Container>
  );
};
