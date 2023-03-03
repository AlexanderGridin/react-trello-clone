import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";
import { IconButton } from "shared/components/IconButton/IconButton";
import { Tooltip } from "shared/components/Tooltip/Tooltip";
import { ClassName } from "shared/models/ClassName";
import { Click } from "shared/models/Click";
import style from "./EditButton.module.css";

interface EditButtonProps extends Click, ClassName {}

export const EditButton = ({ className, onClick }: EditButtonProps) => {
  const cn = `${style.button} ${className}`;

  return (
    <Tooltip content="Edit">
      <IconButton icon={MaterialIcon.EditSquare} activeColor="#a3be8c" className={cn} onClick={onClick} />
    </Tooltip>
  );
};
