import { Icon } from "shared/enums/Icon";
import styled from "styled-components";

const IconContainer = styled.span<{ dark?: boolean }>`
  color: ${({ dark }) => (dark ? "black" : "white")};
  font-size: 1rem;
  line-height: 1;
  display: block;
`;

interface IconProps {
  icon: Icon;
  dark?: boolean;
}

export const MaterialIcon = ({
  icon,
  dark = false,
}: IconProps): JSX.Element => {
  const className = "material-symbols-outlined";

  return (
    <IconContainer className={className} dark={dark}>
      {icon}
    </IconContainer>
  );
};
