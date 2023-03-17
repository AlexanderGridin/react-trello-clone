import { ITestId, IClassName } from "shared/models";

import { StyledIcon } from "./components";
import { MaterialIcon } from "./enums";

interface IIconProps extends ITestId, IClassName {
  icon: MaterialIcon;
}

export const Icon = ({ icon, className = "", "data-testid": testId }: IIconProps) => {
  const classNames = `material-symbols-outlined ${className}`;

  return (
    <StyledIcon data-testid={testId} className={classNames}>
      {icon}
    </StyledIcon>
  );
};
