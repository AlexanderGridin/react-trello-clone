import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";
import { IconButton } from "shared/components/IconButton/IconButton";
import { Tooltip } from "shared/components/Tooltip/Tooltip";
import { IClick, IClassName } from "shared/models";
import style from "./EditButton.module.css";

interface IEditButtonProps extends IClick, IClassName {}

export const EditButton = ({ className, onClick }: IEditButtonProps) => {
  const cn = `${style.button} ${className}`;

  return (
    <Tooltip content="Edit">
      <IconButton icon={MaterialIcon.EditSquare} activeColor="#a3be8c" className={cn} onClick={onClick} />
    </Tooltip>
  );
};
