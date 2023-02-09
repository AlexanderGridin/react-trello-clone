import { Button, ButtonProps } from "../Button/Button";
import { MaterialIcon } from "../Icon/enums/MaterialIcon";
import { Icon } from "../Icon/Icon";
import style from "./IconButton.module.css";

interface IconButtonProps extends Omit<ButtonProps, "isIconOnly" | "children"> {
  icon: MaterialIcon;
}

export const IconButton = (props: IconButtonProps) => {
  const { icon, ...restProps } = props;

  return (
    <Button {...restProps} isEqualPaddings>
      <Icon icon={icon} className={style.icon} />
    </Button>
  );
};
