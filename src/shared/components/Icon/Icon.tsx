import { MaterialIcon } from "shared/enums/MaterialIcon";
import { IconContainer } from "./components/IconContainer";

interface IconProps {
  icon: MaterialIcon;
  className?: string;
}

export const Icon = ({ icon, className = "" }: IconProps) => {
  const classNames = `material-symbols-outlined ${className}`;

  return <IconContainer className={classNames}>{icon}</IconContainer>;
};
