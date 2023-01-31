import { MaterialIcon } from "shared/enums/MaterialIcon";
import { IconContainer } from "./components/IconContainer";

interface IconProps {
  icon: MaterialIcon;
  dark?: boolean;
  className?: string;
}

export const Icon = ({
  icon,
  dark = false,
  className = "",
}: IconProps): JSX.Element => {
  const cssClasses = `material-symbols-outlined ${className}`;

  return (
    <IconContainer className={cssClasses} dark={dark}>
      {icon}
    </IconContainer>
  );
};
