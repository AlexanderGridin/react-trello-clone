import { IconContainer } from "./components/IconContainer";
import { MaterialIcon } from "./enums/MaterialIcon";

interface IconProps {
  icon: MaterialIcon;
  className?: string;
}

export const Icon = ({ icon, className = "" }: IconProps) => {
  const classNames = `material-symbols-outlined ${className}`;

  return <IconContainer className={classNames}>{icon}</IconContainer>;
};
