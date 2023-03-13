import { ITestId, IClassName } from "shared/models";
import { IconContainer } from "./components/IconContainer";
import { MaterialIcon } from "./enums/MaterialIcon";

interface IIconProps extends ITestId, IClassName {
  icon: MaterialIcon;
}

export const Icon = ({ icon, className = "", "data-testid": testId }: IIconProps) => {
  const classNames = `material-symbols-outlined ${className}`;

  return (
    <IconContainer data-testid={testId} className={classNames}>
      {icon}
    </IconContainer>
  );
};
