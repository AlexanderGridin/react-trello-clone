import { ClassName } from "shared/models/ClassName";
import { TestId } from "shared/models/TestId";
import { IconContainer } from "./components/IconContainer";
import { MaterialIcon } from "./enums/MaterialIcon";

interface IconProps extends TestId, ClassName {
  icon: MaterialIcon;
}

export const Icon = ({ icon, className = "", "data-testid": testId }: IconProps) => {
  const classNames = `material-symbols-outlined ${className}`;

  return (
    <IconContainer data-testid={testId} className={classNames}>
      {icon}
    </IconContainer>
  );
};
