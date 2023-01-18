import { MaterialIcon } from "shared/enums/MaterialIcon";
import { IconContainer } from "./components/IconContainer";

interface IconProps {
  icon: MaterialIcon;
  dark?: boolean;
}

export const Icon = ({ icon, dark = false }: IconProps): JSX.Element => {
  const className = "material-symbols-outlined";

  return (
    <IconContainer className={className} dark={dark}>
      {icon}
    </IconContainer>
  );
};
