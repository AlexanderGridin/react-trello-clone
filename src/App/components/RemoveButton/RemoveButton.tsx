import { ButtonStyle } from "shared/components/Button/enums/ButtonStyle";
import { IconButton } from "shared/components/IconButton/IconButton";
import { MaterialIcon } from "shared/enums/MaterialIcon";
import { PropsWithClick } from "shared/models/PropsWithClick";

interface RemoveButtonProps extends PropsWithClick {
  className?: string;
}

export const RemoveButton = ({ className, onClick }: RemoveButtonProps) => {
  return (
    <IconButton
      icon={MaterialIcon.Delete}
      buttonStyle={ButtonStyle.Danger}
      className={className}
      onClick={onClick}
    />
  );
};
