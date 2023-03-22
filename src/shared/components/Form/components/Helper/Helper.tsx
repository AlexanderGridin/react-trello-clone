import { IChildren } from "shared/models";

import { Icon, MaterialIcon } from "../../../Icon";
import { IHelperType } from "./models";
import { StyledHelper } from "./components";

import style from "./Helper.module.css";

interface HelperProps extends Required<IChildren>, IHelperType {}

export const Helper = ({ type = "regular", children }: HelperProps) => {
  return (
    <StyledHelper type={type}>
      <Icon icon={MaterialIcon.Error} className={style.icon} />
      {children}
    </StyledHelper>
  );
};
